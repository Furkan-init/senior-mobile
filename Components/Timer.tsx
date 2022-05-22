import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Timer = ({duration}: any) => {
    const [localDuration, setLocalDuration] = useState(duration);

    useEffect(() => {
        const timerId = setInterval(() => teardown(), 1000);
        return () => clearInterval(timerId);
    })

      const teardown = () => {
        if(localDuration > 0)
        setLocalDuration(localDuration - 1);
    }
    

  return (
    <View>
      <Text>{localDuration}</Text>
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({})