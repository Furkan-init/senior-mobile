import React, { useState, useEffect, useRef } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import ReactDOM from "react-dom";

export default function Counter({duration}) {
  const [count, setCount] = useState(duration);

  useInterval(() => {
    // Your custom logic here
    if(count > 0)
    setCount(count - 1);
    else return;
  }, 1000);

  return <Text>  {count}</Text>;
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}