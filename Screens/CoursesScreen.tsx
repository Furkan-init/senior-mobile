import { Dimensions, FlatList, Pressable, SafeAreaView, StyleSheet, Text, View, Image, Animated} from 'react-native'
import React, { useRef } from 'react'

const { height, width } = Dimensions.get('window');
import { SharedElement } from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';

const COURSE_WIDTH = width * 0.45;
const COURSE_HEIGHT = height * 0.25;

const MAX_HEIGHT = height / 2;
const JUST_WIDTH = width * 0.65;
const MARGIN = 8;
const FULL_WIDTH = JUST_WIDTH + 2 * MARGIN;
const SPACER = (width - FULL_WIDTH) / 3;



const CoursesScreen = ({ route, navigation }: any) => {
    const { parentCourseName, parentCourseDesc, courses, coverImage, courseMaterial } = route.params;
    // console.log(courses);
    const lowestLevel:Boolean = Object.keys(courses[0]).length === 0;
    // console.log(lowestLevel);

    const childDataWSpacer = [{ key: 'left-spacer', id: 'left-spacer' }, ...courses, { key: 'right-spacer', id: 'right-spacer' }]

  

    const scrollX = useRef(new Animated.Value(0)).current;

    const Course = ({ item, index }: any) => {

        const inputRange = [
            (index - 2) * FULL_WIDTH,
            (index - 1) * FULL_WIDTH,
            (index) * FULL_WIDTH,
        ];

        const translateY = scrollX.interpolate(
            {
                inputRange,
                outputRange: [0, -50, 0]
            }
        );

         if (!item.name) return <View style={styles.animatedCourseSpacer} />

        return(
            <Animated.View 
            style={[styles.coursesScreenCourseContainer, { transform: [{ translateY }] }]}
    
            // onPress={() => {
            //     navigation.navigate('Course Detail', {
            //         courseDetail : item,
            //       });
            // }}
            >
              <Text>{item.name}</Text>
            </Animated.View>
        )
       
      }
      
    
        const renderCourse = ({ item, index }: any) => (
          <Course item={item} index={index} />
        );
    
       


  return (
    <View style={styles.coursesScreenMainContainer}>
        <Image
                style={styles.coursesScreenBackground}
                source={{ uri: coverImage }} 
        />
       { !lowestLevel && <View
        style={styles.coursesScreenFlatListContainer}
        >
       <Animated.FlatList
        horizontal
        bounces={false}
        onScroll={Animated.event(
            [
                { nativeEvent: { contentOffset: { x: scrollX } } }
            ], { useNativeDriver: false }
        )}
        snapToInterval={FULL_WIDTH}
        decelerationRate='fast'
        scrollEventThrottle={16}
        style={styles.coursesScreenFlatList}
        data={childDataWSpacer}
        renderItem={renderCourse}
        keyExtractor={item => item.id}
      />
      </View>}
       <SharedElement id={`general.bg`}>
      <View style={styles.coursesScreenBottomSheet} >
        <Pressable style={styles.coursesScreenMaterial}
        onPress={() => {
            navigation.navigate('Course Detail', {
                parentCourseName: parentCourseName,
                parentCourseDesc: parentCourseDesc,
                courseDetail : courses,
                courseMaterial : courseMaterial,
                coverImage : coverImage,
              });
        }}
        >
        <Text>{parentCourseName} COURSE MATERIAL ^</Text>
        </Pressable>
    </View>
      </SharedElement>
    </View>
  )
}

export default CoursesScreen

const styles = StyleSheet.create({
    coursesScreenMainContainer : {
        flex : 1,
        backgroundColor : '#353b48'
    },
    coursesScreenBackground : {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        resizeMode: 'cover',
    },
    coursesScreenBottomSheet : {
        position : 'absolute',
        width,
        height,
        backgroundColor : '#2f3640',
        transform : [{translateY : height / 2 }],
        borderRadius : 32,
    },
    coursesScreenCourseContainer : {
        top : height * 0.07,
        height : COURSE_HEIGHT,
        width : COURSE_WIDTH,
        margin : MARGIN,
        backgroundColor : '#c8d6e5',
        borderRadius : 15,
    },
    coursesScreenFlatListContainer : {
        // backgroundColor : 'red'
        width,
        height : height * 0.35,
        top : height * 0.3,
        justifyContent  : 'center'
    },
    coursesScreenFlatList : {
        // backgroundColor : 'aquamarine',
    },
    coursesScreenMaterial : {
        width,
        height: 80,
        // backgroundColor : 'coral',
        justifyContent : 'center',
        alignItems: 'center',
    },
    animatedCourseSpacer: {
        // backgroundColor: 'red',
        height: 50,
        width: 50,
        top: height*0.12,
    },

})