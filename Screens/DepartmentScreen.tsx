import { Animated, Dimensions, SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Pressable, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react'

import { SharedElement } from 'react-navigation-shared-element';
import courseData from '../Components/departmentData';


const { height, width } = Dimensions.get('window');

const FLAT_HEIGHT = height * 0.8;
const FLAT_WIDTH = width * 0.95;

const ITEM_WIDTH = width * 0.65;
const ITEM_HEIGHT = height * 0.35;

const MARGIN = 8;

const BACKDROP_HEIGHT = height * 0.12;
const BACKDROP_WIDTH = width;

const FULL_WIDTH = ITEM_WIDTH + 2 * MARGIN;
const SPACER = (width - FULL_WIDTH) / 2;


const courseDataWSpacer = [{ key: 'left-spacer', id: 'left-spacer' }, ...courseData, { key: 'right-spacer', id: 'right-spacer' }]


const DepartmentScreen = ({ navigation }: any) => {

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

        if (!item.coverImage) return <View style={styles.animatedCourseSpacer} />


        return (
                <Animated.View
                    style={{ transform: [{ translateY }], top: height * 0.12}}
                >
                    <Pressable
                    onPress={() => navigation.navigate('Department First Level',{
                        item: item
                    })}
                    >
                     <SharedElement id={`item.${item.id}.photo`}>
                    <Image
                        style={[styles.departmentScreenFlatListImage]}
                        source={{ uri: item.coverImage }}
                    />
                    </SharedElement>
                     <Text
                    style={styles.departmentScreenFlatListImageNameTxt}
                    >{item.name}</Text>
                    </Pressable>
                </Animated.View>
        )
    }


    const renderCourse = ({ item, index }: any) => { 
        return (
            <View style={{ justifyContent: 'center' }}
            >
                <Course item={item} index={index} />
            </View>
        )
    }


    

    return (
        <SafeAreaView style={styles.animatedCourseScreenContainer} >
            {courseData.map((item, index) => {
                return (
                  
                    <Animated.Image
                        key={item.id}
                        style={[
                            {
                                opacity: scrollX.interpolate({
                                    inputRange: [(index - 1) * FULL_WIDTH,
                                    (index) * FULL_WIDTH,
                                    (index + 1) * FULL_WIDTH,],
                                    outputRange: [0, 1, 0],
                                })
                            }, styles.depScGradientBackground]}
                        source={{ uri: item.coverImage }}
                        blurRadius={20}
                    />
                
                )
            })}
            <View style={styles.departmentScreenFlatListMainContainer}>
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
                    data={courseDataWSpacer}
                    renderItem={renderCourse}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    )
}

export default DepartmentScreen

const styles = StyleSheet.create({
    animatedCourseScreenContainer: {
        flex: 1,
        backgroundColor: '#fd9644',
        alignItems: 'center',
    },
    departmentScreenFlatListMainContainer: {
        height: FLAT_HEIGHT,
        width: FLAT_WIDTH,
        top: height * 0.09,
        //  backgroundColor : 'aquamarine',
    },
    departmentScreenFlatListImage: {
        // backgroundColor: 'yellow',
        height: ITEM_HEIGHT,
        width: ITEM_WIDTH,
        margin: MARGIN,
        borderRadius: 10,
    },
    depScBackDrop: {
         position : 'absolute',
        top: height * 0.035,
        height: BACKDROP_HEIGHT,
        width: ITEM_WIDTH,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    animatedCourseSpacer: {
        width: SPACER,
        height: SPACER,
        // backgroundColor : 'red',
    },
    depScGradientBackground: {
        // top: height * 0.05,
        position: 'absolute',
        width,
        height: height*0.9,
    },
    departmentScreenFlatListImageNameTxt : {
        position : 'absolute',
        top : '10%',
        left : '10%',
        fontSize : 40,
        backgroundColor: '#3c6382',
        borderRadius: 10,
        color : 'white'
    }
   
   



});