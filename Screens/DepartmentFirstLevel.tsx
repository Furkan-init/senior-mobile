import { Dimensions, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';
import { FlatList } from 'react-native-gesture-handler';
import ChapterDistinguish from '../Components/ChapterDistinguish';

const popAction = StackActions.pop(1);

const { height, width } = Dimensions.get('window');

const BACK_IMG = height * 0.25;
const ICON_SIZE = height*0.05;
const FLIST_HEIGHT = height * 0.75;
const BACKG_HEIGHT = height * 0.1;

const SHARED_IMG_HEIGHT = height * 0.3;

const HEADER_HEIGHT = height * 0.1;
const COURSE_CONTAINER_HEIGHT = height * 0.79;




const DepartmentFirstLevel = ({ route, navigation }: any) => {
    const { item } = route.params;

    // console.log(item.courses);

    const Item = ({ item, index } : any) => (
        <View style={{height : 100, backgroundColor : 'red', margin : 8}}>
          <Text>{item.name}</Text>
        </View>
      );

    const renderItem = ({ item, index } : any) => (
        <Item item={item} index={index} />
      );

  return (
    <View style={styles.depFirstLevelContainer}>
        <View style={styles.depFirstLevelHeader}>
        <Pressable
          style={styles.depFirstLevelBackIcon}
            onPress={() => navigation.dispatch(popAction)}
            >
           <AntDesign name="arrowleft" size={ICON_SIZE} color="#1e3799" />
            </Pressable>
         <SharedElement id={`item.${item.id}.photo`}
         style={styles.depFirstLevelContainerImage}
         >
        <Image 
            style={{width, height :HEADER_HEIGHT}}
             // blurRadius={10}
            source={{ uri: item.coverImage }}
        />
        </SharedElement>
        </View>

        <View style={styles.depFirstLevelChapterContainer}>
           <ChapterDistinguish />
        </View>
    </View>
  )
}

DepartmentFirstLevel.sharedElements = (route: any) => {
    const { item } = route.params;

    return [
        { id: `item.${item.id}.photo` }
    ]
}

export default DepartmentFirstLevel

const styles = StyleSheet.create({
    depFirstLevelContainer: {
        flex: 1,
        backgroundColor: '#212529',
    },
    depFirstLevelContainerImage : {
        position : 'absolute',
        width,
        // backgroundColor : 'red',
    },
    depFirstLevelBackDrop : {
        height : BACKG_HEIGHT,
        width,
        top: height*0.045,
        borderRadius : 40,
        backgroundColor : 'green',
        justifyContent : 'center',
        alignItems : 'center',
    },
    depFirstLevelBackIcon : {
        zIndex: 2,
    position : 'absolute',
    marginLeft: '1%',
    backgroundColor: '#3c6382',
    borderRadius: 10,
    },
    depFirstLevelCourseFlatList : {
        height : FLIST_HEIGHT,
        width,
        top: height*0.1,
        //  backgroundColor : 'aquamarine',
    },
    depFirstLevelHeader : {
        height : HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'center',
    },
    depFirstLevelChapterContainer : {
        display : 'flex',
        height: COURSE_CONTAINER_HEIGHT,
        alignItems : 'center',
        // backgroundColor: 'aquamarine',
    }
})