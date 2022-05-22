import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { Page } from '../Components/Page';


const WORDS = ["Page 1", 'Page 2'];

const SignUpScreen = () => {
        const translateX = useSharedValue(0);
      
        const scrollHandler = useAnimatedScrollHandler((event) => {
          translateX.value = event.contentOffset.x;
        });

    return (
        <Animated.ScrollView
        onScroll={scrollHandler}
        pagingEnabled
        scrollEventThrottle={16}
        horizontal
        style={styles.container}
      >
        {WORDS.map((title, index) => {
          return (
            <Page
              key={index.toString()}
              title={title}
              translateX={translateX}
              index={index}
            />
          );
        })}
        
      </Animated.ScrollView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
    }
})
