import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';

const NotificationScreen = () => {
    const offset = useSharedValue(0);
    const offset2 = useSharedValue(0);
    const offset3 = useSharedValue(0);
    const offset4 = useSharedValue(0);

    
    

   
    

    const animatedStyles = useAnimatedStyle(() => {
        return {
          transform: [{ translateX: offset.value * 10 },
            { translateX: offset2.value * 10 },
            { translateX: offset3.value * 10 },
            { translateX: offset4.value * 10 },
          ],
        
        };
      });

  return (
    <View style={styles.NotificationContainer}>
      <Text>Notification Screen</Text>
      <Animated.View style={[animatedStyles,styles.scrollViewAnimation]} />
      <Animated.View style={[animatedStyles,styles.scrollViewAnimation]} />
      <Animated.View style={[animatedStyles,styles.scrollViewAnimation]} />
      <Animated.View style={[animatedStyles,styles.scrollViewAnimation]} />
      <Button
        onPress={() => {
          offset.value = withDelay(10, withTiming(1));
          offset2.value = withDelay(1000, withTiming(10));
          offset3.value = withDelay(2000, withTiming(1));
          offset4.value = withDelay(3000, withTiming(1));
        }}
        title="Move"
      />
      <Button
        onPress={() => {
          offset.value = withDelay(10, withTiming(-1,{
            duration: 500,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          }));
          offset2.value = withDelay(300, withTiming(0));
          offset3.value = withDelay(900, withTiming(0));
          offset4.value = withDelay(1100, withTiming(0));
        }}
        title="Move"
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    NotificationContainer : {
        flex : 1,
        backgroundColor : '#1abc9c',
        alignItems : 'center',
    },
    scrollViewAnimation : {
        backgroundColor : '#2ecc71',
        width : 100,
        height : 100,
        marginTop : 50,
    }
});
