import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, Dimensions, Pressable } from 'react-native';
import Animated, { Easing, FadeInDown, FadeInRight, set, SlideInRight, useAnimatedStyle, useSharedValue, withDelay, withSequence, withSpring, withTiming } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const { height, width } = Dimensions.get('window');

const DATA = [
  {
    id: '3b9c05c0-6f9b-11ec-90d6-0242ac120003',
    title: 'CMPE 1',
    instructor: 'Instructor 1',
  },
  {
    id: '4673f03e-6f9b-11ec-90d6-0242ac120003',
    title: 'CMPE 2',
    instructor: 'Instructor 2',
  },
  {
    id: '4c12a1f2-6f9b-11ec-90d6-0242ac120003',
    title: 'CMPE 3',
    instructor: 'Instructor 3',
  },
  {
    id: '5090faee-6f9b-11ec-90d6-0242ac120003',
    title: 'CMPE 4',
    instructor: 'Instructor 4',
  },
  {
    id: '56d74d0e-6f9b-11ec-90d6-0242ac120003',
    title: 'CMPE 5',
    instructor: 'Instructor 5',
  },
  {
    id: '5cda00b6-6f9b-11ec-90d6-0242ac120003',
    title: 'CMPE 6',
    instructor: 'Instructor 6',
  },
  {
    id: '618e5a30-6f9b-11ec-90d6-0242ac120003',
    title: 'CMPE 7',
    instructor: 'Instructor 7',
  },
  {
    id: '66ede392-6f9b-11ec-90d6-0242ac120003',
    title: 'CMPE 8',
    instructor: 'Instructor 8',
  },
  {
    id: '6b8cce5e-6f9b-11ec-90d6-0242ac120003',
    title: 'CMPE 9',
    instructor: 'Instructor 9',
  },
];


const App = () => { 
  
  const renderItem = ({ item }: any) => (
    <Item title={item.title} instructor = {item.instructor} index={item.id}  />
  );

  
  const Item = ({ title, instructor, index}: any) => {

    const navigation = useNavigation();
    const scale = useSharedValue(1);

     const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(scale.value,{
            duration: 50,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          }),
        },
      ],
    };
  });



    return(
      <Pressable 
      onPressIn={() => scale.value = 1.05}
      onPress={() => {navigation.navigate('Chapters');
      scale.value = 1;
    }}
      >
      <Animated.View
    key={index}
    style={[
      animatedStyles,
    ]}
    >
    {/* <Button onPress={() => (scale.value = 1)} title="Move Back" /> */}
    <View style={styles.item}>
    <View style={styles.customFlatVideoPrev} />
    <View style={styles.customFlatTag} >
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.instructor}>{instructor}</Text>
    <View style={styles.customFlatProgress} />
    </View>
    <Pressable style={styles.customFlatInfo}
    onPress={() => 
      scale.value = 1.05
    }
    >
      <Text>i</Text>
    </Pressable>  
    </View>
    </Animated.View>
    </Pressable>
    )
  }

  
  // useEffect(() => {
  //   scale.value = withSpring(2);
  // }, [])
   
    
 

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#e74c3c',
    height: 0.15*height,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection:'row',
  },
  title: {
    fontSize: 25,
  },
  instructor: {
    fontSize: 20,
    marginTop:'1%',
  },
  customFlatVideoPrev : {
    backgroundColor: 'grey',
    height: '85%',
    width: '30%',
    borderRadius : 10,
    marginLeft:'2%',
  },
  customFlatTag : {
    // backgroundColor: 'yellow',
    marginLeft:'2%',
    height: '80%',
    width: '55%',
    justifyContent: 'center',
  },
  customFlatProgress : {
    height: '20%',
    width: '20%',
    backgroundColor:'aquamarine',
    alignSelf:'center',
    marginTop:'4%',
  },
  customFlatInfo : {
    // backgroundColor: 'aquamarine',
  }

});

export default App;