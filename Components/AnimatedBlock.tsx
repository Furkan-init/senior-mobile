import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

type contextType = {
    x: number,
    y: number,
}


const AnimatedBlock = () => {
    const x = useSharedValue(0);
    const y = useSharedValue(0);

    const eventHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent,contextType>({
        onStart: (event,ctx) => {
                ctx.x = x.value;
                ctx.y= y.value;
        },
        onActive : (event,ctx) => {
           x.value = event.translationX + ctx.x;
           y.value = event.translationY+ ctx.y;
        },
        onEnd: () => {
            const distance = Math.sqrt(x.value**2 + y.value**2);
            if( distance < 175 + 50){
                x.value = withSpring(0);
                y.value = withSpring(0);
            }
            
        },
    });

    const animatedBox = useAnimatedStyle(() => {
       return {
           transform : [{translateX : x.value }, {translateY : y.value}]
       }
    });

    return (
        <View style={styles.pan}>
            <Text>Animatrix</Text>
            <View style={styles.circle}>
            <PanGestureHandler onGestureEvent={eventHandler}>
            <Animated.View style={[styles.box, animatedBox]} />
            </PanGestureHandler>
            </View>
        </View>
    )
}

export default AnimatedBlock

const styles = StyleSheet.create({
    pan: {
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'rgb(39, 174, 96)',
        borderRadius: 20,
    },
    circle: {
        width: 350,
        height: 350,
        borderWidth: 5,
        borderColor: 'rgb(231, 76, 60)',
        borderRadius: 400,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
