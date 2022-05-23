import { Dimensions, SafeAreaView, StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { StackActions, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import sectionData from '../Components/SectionData';

const { height, width } = Dimensions.get('window');


const ICON_SIZE = height * 0.04;
const BSHEET_TOP = height * 0.03;
const ICON_CONTAINER = height * 0.07;

const popAction = StackActions.pop(1);

const HEADER_HEIGHT = height * 0.05;
const COURSE_CONTAINER_HEIGHT = height * 0.84;


const DepartmentDetailScreen = ({  navigation }) => {
    

    const SectionData = sectionData;

    const [selectedId, setSelectedId] = useState(null);


    const Item = ({ item, onPress }) => {


        return (
            <Pressable
                style={styles.DepartmentDetailScreenChapterHeader}
                onPress={onPress}
            >
                <Text
                >{item.sectionName}</Text>
                <AntDesign name="plus" size={24} color="black" />
                <Text>
                    {item.sectionId === selectedId ?
                        item.materials.map((material, key) => {
                            console.log(material.size);
                            return (
                                <View
                                    key={key}
                                >
                                    <Text>
                                        {material.materialName}
                                    </Text>
                                </View>
                            )
                        }) : null}
                </Text>
            </Pressable>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <Item item={item}
                onPress={() => setSelectedId(item.sectionId)}
            />
        )
    }



    return (
        // <SharedElement id={`general.bg`}>
        <View style={styles.animatedCourseScreenContainer} >
            <View style={styles.animatedCourseScreenHeader}>
                <Pressable
                    style={styles.depFirstLevelBackIcon}
                    onPress={() => navigation.dispatch(popAction)}
                >
                    <MaterialIcons name="arrow-back" size={ICON_SIZE} color="black" />
                </Pressable>
             
            </View>

            {/* <View style={styles.animatedCourseScreenBody} >

                <FlatList
                    data={SectionData}
                    renderItem={renderItem}
                    extraData={selectedId}
                    keyExtractor={item => item.sectionId}
                />

            </View> */}
        </View>

        // </SharedElement>

        //     <SharedElement id={`item.${item.id}.photo`}
        //     style={styles.depFirstLevelContainerImage}
        //     >
        //    <Image 
        //        style={{width, height :HEADER_HEIGHT}}
        //         // blurRadius={10}
        //        source={{ uri: item.coverImage }}
        //    />
        //    </SharedElement>

    )
}



export default DepartmentDetailScreen

const styles = StyleSheet.create({
    animatedCourseScreenContainer: {
        flex: 1,
        backgroundColor: '#212529',
    },
    depFirstLevelContainerImage : {
        position : 'absolute',
        width,
        // backgroundColor : 'red',
    },
    departmentScreenBottomSheetContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: height * 0.75,
        width,
        top: BSHEET_TOP,
        transform: [{ translateY: height / 9 }],
        backgroundColor: 'blue',
        borderRadius: 32,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    depFirstLevelBackIcon: {
        zIndex: 2,
        position: 'absolute',
    },
    depDetBackDropContainer: {
        height: ICON_CONTAINER,
        width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 32,
        // backgroundColor: '#FFC312'
    },
    animatedCourseScreenHeader: {
        height: HEADER_HEIGHT,
        display: 'flex',
        backgroundColor: 'aquamarine',
        justifyContent: 'center',
    },
    animatedCourseScreenBody: {
        display: 'flex',

        height: COURSE_CONTAINER_HEIGHT,
        alignItems: 'center',
        backgroundColor: '#aeafb1',
    },
    DepartmentDetailScreenChapterHeader: {
        height: 'auto',
        marginTop: 20,
        width: width * 0.9,
        backgroundColor: 'yellow',
    }

})