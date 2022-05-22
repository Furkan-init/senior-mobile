import React from 'react';
import { Dimensions, View, StyleSheet, Text, TextInput } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');

const SIZE = width * 0.3;

interface PageProps {
  index: number;
  translateX: Animated.SharedValue<number>;
  title: string;
}

const colorPalette = ['#1abc9c','#2ecc71'];

const Page: React.FC<PageProps> = ({ index, translateX, title }) => {
  const inputRange = [(-index - 1) * width, index * width, (index + 1) * width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ scale }],
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ translateY: translateY }],
    };
  });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorPalette[index] },
      ]}
    >
      <Animated.View style={[styles.square, rStyle]} />
      <Animated.View style={[styles.textContainer, rTextStyle]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
     justifyContent: 'flex-start',
  },
  square: {
    width: SIZE,
    height: SIZE/2,
    backgroundColor: 'rgba(0, 0, 256, 0.4)',
    opacity: 0.3,
    marginTop:'2%',
  },
  text: {
    fontSize: 25,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  textContainer: { 
    position: 'absolute',
  marginTop:'5.5%',
},

});

export { Page };