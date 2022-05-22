import { Animated, Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('window');
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';


const videoData = [
    {
        id: '3b9c05c0-6f9b-11ec-90d6-0242ac120003',
        name: '1.1 Introduction to ...',
        instructor: 'Instructor 1',
        coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80',
      },
      {
        id: '4673f03e-6f9b-11ec-90d6-0242ac120003',
        name: '1.2 Lorem Ipsum ...',
        instructor: 'Instructor 2',
        coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80',
      },
      {
        id: '4c12a1f2-6f9b-11ec-90d6-0242ac120003',
        name: '1.3 Lorem Ipsum ...',
        instructor: 'Instructor 3',
        coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80',
      },
      {
        id: '5090faee-6f9b-11ec-90d6-0242ac120003',
        name: '1.4 Lorem Ipsum ...',
        instructor: 'Instructor 4',
        coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80',
      },
      {
        id: '56d74d0e-6f9b-11ec-90d6-0242ac120003',
        name: '1.5 Lorem Ipsum ...',
        instructor: 'Instructor 5',
        coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80',
      },
];

const AnimatedChapterFollowUp = () => {


    const VideoThumbnails = ({item, index}: any) => {
        return(
            <View style={{height : 300, width : 300, margin: 8, }}>
            <Animated.Image
            style={{resizeMode: 'cover',  position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            }}
            source={{ uri: item.coverImage }}
        />
        <Text style={styles.animatedChapterItemName}>{item.name}</Text>
        <Text style={styles.animatedChapterItemInstructor}>{item.instructor}</Text>
        </View>
        )
    }

    const renderVideoThumbnails = ({item, index}: any) => (
        <Animatable.View style={{height : '50%',justifyContent : 'center'}}
        animation={'zoomIn'}
        duration={700}
        delay={400 + index * 100}
        >
        <VideoThumbnails item={item} index={index} />
        </Animatable.View>
    )


  return (
    <View style={styles.eventContainer}>
            <Text style={{fontSize : 60}}>CMPE X</Text>
            <Text style={{fontSize : 30}}>Description...</Text>
          
            <View style={styles.eventScreenBottomSheet} >
            <View style={styles.eventScreenBottomSheetContent}
            >
            <MaterialIcons name="video-library" size={40} color="black" />
            <FontAwesome5 name="file-pdf" size={40} color="black" />
            </View>
            <Text style={{fontSize : 20, alignSelf: 'flex-start', margin : 20}}>Videos</Text>
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
        data={videoData}
        renderItem={renderVideoThumbnails}
        keyExtractor={item => item.id}
      />
            </View>
          
        </View>
  )
}


export default AnimatedChapterFollowUp

const styles = StyleSheet.create({
    eventContainer: {
        flex: 1,
        backgroundColor: '#27ae60'
    },
    eventScreenBottomSheet : {
        position : 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width,
        height,
        backgroundColor:'rgba(0,0,0,0.1)',
        transform: [{translateY: height / 4 }],
        borderRadius : 32,
        alignItems : 'center',
    },
    eventScreenBottomSheetContent : {
        backgroundColor : 'aquamarine',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        width : '35%',
        
    },
    animatedChapterItemName : {
        position: 'absolute',
        bottom : height * 0.03,
        fontSize: 35,
        left: 20,
        color : 'white',
        fontWeight: '700',
        width : '85%',
    },
    animatedChapterItemInstructor : {
        position: 'absolute',
        top : height * 0.1,
        fontSize: 30,
        left: 20,
        color : 'white',
        fontWeight: '400',
    }
})