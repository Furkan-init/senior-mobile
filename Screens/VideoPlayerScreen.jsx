import React, { useState, useCallback, useRef } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View, Image, Alert, Button } from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";

const { height, width } = Dimensions.get('window');
import { StackActions, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
const popAction = StackActions.pop(1);
const ICON_SIZE = height * 0.05;

export default function App({route,navigation}) {
  const { link } = route.params;

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("Course has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

 

  return (
    <View 
    style={styles.containerPdfViewerScreen}
    >
        <View style={styles.backContainerPdfViewerScreen} >
        <Pressable
          style={styles.depFirstLevelBackIcon}
            onPress={() => navigation.dispatch(popAction)}
            >
           <AntDesign name="arrowleft" size={ICON_SIZE} color="#6e3b6e" />
            </Pressable>
        </View>
        <View
        style={styles.webWiewContainerPdfViewerScreen}
        >
        <YoutubePlayer
        height={width}
        play={playing}
        // videoId={link}
        // style={styles.webWiewContainerPdfViewerScreen}
        playList={link}
        onChangeState={onStateChange}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPdfViewerScreen : {
    flex : 1,
    backgroundColor: '#212529',
    // justifyContent: 'space-between',
},
backContainerPdfViewerScreen : {
    width,
    height: height * 0.07,
    // backgroundColor: 'blue',
    justifyContent: 'center',
},
depFirstLevelBackIcon : {
    zIndex: 2,
    position : 'absolute',
    marginLeft: '1%',
    backgroundColor: '#3c6382',
    borderRadius: 10,
},
webWiewContainerPdfViewerScreen : {
    width,
    height: width,
    // backgroundColor: 'blue',
    marginTop: height * 0.2,
}
})


