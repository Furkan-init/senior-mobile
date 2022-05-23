import { Dimensions, Pressable, StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import lectureData from './ChapterData2';

import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
const { height, width } = Dimensions.get('window');

const ICON_SIZE = height * 0.05;


const ChapterDistinguish = () => {

    const navigation = useNavigation();

    // Distinguish The Weeks Array
    const chapterLecture = lectureData.filter(item => item.chapterType === 'LECTURE');
    const chapterMisc = lectureData.filter(item => item.chapterType === 'MISC');

    // Chapter Lecture States
    const [selectedId, setSelectedId] = useState(null);


    // FLATLIST OF MISC
    const renderItemMisc = ({ item }) => (
        <ItemMisc item={item} />
    );

    const ItemMisc = ({ item }) =>{ 
        
        const customIcon = () => {
            if(item.chapterMaterialType === 'VIDEO') return  <AntDesign name="youtube" size={ICON_SIZE} color="black" />
            else if (item.chapterMaterialType === 'PDF') return  <AntDesign name="pdffile1" size={ICON_SIZE} color="black" />
            else if (item.chapterMaterialType === 'DOCX') return  <AntDesign name="wordfile1" size={ICON_SIZE} color="black" />
            else if (item.chapterMaterialType === 'PPTX') return  <AntDesign name="pptfile1" size={ICON_SIZE} color="black" />
            else if (item.chapterMaterialType === 'XLSS') return   <AntDesign name="exclefile1" size={ICON_SIZE} color="black" />
            else return  <AntDesign name="questioncircle" size={ICON_SIZE} color="black" />
        }

        return(
            item.chapterMaterialType === 'VIDEO' ? 
            <Pressable
           
            style={styles.chapterDistinguishContainerSpecificChapterAll}
            onPress={() => navigation.navigate('VideoPlayer',{ link: item.chapterLink})}
        >
            <AntDesign name="youtube" size={ICON_SIZE} color="black" />
            <Text
             style={{marginTop: '15%'}}
            >{item.chapterName}</Text>

        </Pressable> : <Pressable
            style={styles.chapterDistinguishContainerSpecificChapterAll}
            onPress={() => navigation.navigate('PdfViewer',{ link: item.chapterLink})}
        >
            {customIcon()}
            <Text
             style={{marginTop: '15%'}}
            >{item.chapterName}</Text>
        </Pressable>




        // <View
        //     style={styles.chapterDistinguishContainerSpecificChapterAll}>
        //     {customIcon()}
        //     <Text
        //     style={{marginTop: '15%'}}
        //     >{item.chapterName}</Text>
        // </View>
    )}


    // FLATLIST OF CHAPTERS
    const renderItem = ({ item }) => {

        const backgroundColor = item.chapterId === selectedId ? "#6e3b6e" : "#4b7bec";
        const color = item.chapterId === selectedId ? '#6e3b6e' : 'black';
        const customHeight = item.chapterId === selectedId ? 'auto' : 'height * 0.1,';

        // When select a week, week tab will expand
        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.chapterId);
                    // navigation.navigate('Department Detail')
                }}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
                height={{ customHeight }}
            />
        );
    }

    const Item = ({ item, onPress, backgroundColor, textColor, customHeight }) => {

        return (
            <Pressable
                onPress={onPress}
                style={[
                    styles.chapterDistinguishContainerSpecificChapter,
                    backgroundColor,
                    customHeight
                ]}

            >
                <>
                    <View style={styles.chapterDistinguishContainerSpecificChapterWeek}>
                        <Text style={[textColor]}>{item.chapterName}</Text>
                    </View>
                    {item.chapterId === selectedId ?

                        item.chapterMaterials.map((material, key) => {

                            const customIcon = () => {
                                if (material.materialType === 'PDF') return  <AntDesign name="pdffile1" size={ICON_SIZE} color="black" />
                                else if (material.materialType === 'DOCX') return  <AntDesign name="wordfile1" size={ICON_SIZE} color="black" />
                                else if (material.materialType === 'PPTX') return  <AntDesign name="pptfile1" size={ICON_SIZE} color="black" />
                                else if (material.materialType === 'XLSS') return   <AntDesign name="exclefile1" size={ICON_SIZE} color="black" />
                                else return  <AntDesign name="questioncircle" size={ICON_SIZE} color="black" />
                            }
                            
                            return (
                                material.materialType === 'VIDEO' ?
                                    <Pressable
                                        key={key}
                                        style={styles.chapterDistinguishContainerSpecificChapterAll}
                                        onPress={() => navigation.navigate('VideoPlayer',{ link: material.materialLink})}
                                    >
                                        <AntDesign name="youtube" size={ICON_SIZE} color="black" />
                                        <Text
                                         style={{marginTop: '15%'}}
                                        >{material.materialName}</Text>

                                    </Pressable> : <Pressable
                                        key={key}
                                        style={styles.chapterDistinguishContainerSpecificChapterAll}
                                        onPress={() => navigation.navigate('PdfViewer',{ link: material.materialLink})}
                                    >
                                        {customIcon()}
                                        <Text
                                         style={{marginTop: '15%'}}
                                        >{material.materialName}</Text>
                                    </Pressable>
                                   
                            )
                        })

                        : null}
                </>
            </Pressable>
        )
    }





    return (
        <>
            {/* MISC */}
            <SafeAreaView style={styles.chapterDistinguishContainerAll} >
                <FlatList
                    horizontal
                    data={chapterMisc}
                    renderItem={renderItemMisc}
                    keyExtractor={item => item.chapterId}
                />
            </SafeAreaView>
            {/* LECTURE */}
            <SafeAreaView style={styles.chapterDistinguishContainerSpecific} >
                <FlatList
                    data={chapterLecture}
                    renderItem={renderItem}
                    keyExtractor={item => item.chapterId}
                    extraData={selectedId}
                />
            </SafeAreaView>
        </>
    )
}

export default ChapterDistinguish

const styles = StyleSheet.create({
    chapterDistinguishContainerAll: {
        display: 'flex',
        marginTop: '2%',
        width: width * 0.95,
        height: height * 0.18,
        // backgroundColor: 'yellow',
    },
    chapterDistinguishContainerMaterial: {
        display: 'flex',
        margin: '2%',
        width: width * 0.85,
        height: height * 0.17,
        backgroundColor: 'blue',
    },
    chapterDistinguishContainerSpecific: {
        display: 'flex',
        marginTop: '2%',
        height: height * 0.59,
        width: width * 0.95,
        // backgroundColor: 'yellow',
        alignItems: 'center',
    },
    chapterDistinguishContainerSpecificChapter: {
        display: 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%',
        width: width * 0.9,
        borderWidth: 3,
        borderRadius: 10,
        borderColor:'#18dcff',
    },
    chapterDistinguishContainerSpecificChapterAll: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.15,
        width: width * 0.3,
        backgroundColor: '#aeafb1',
        margin: height * 0.015,
        borderWidth: 3,
        borderRadius: 10,
        borderColor:'black',
    },
    chapterDistinguishContainerSpecificChapterWeek : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.05,
        width: width * 0.5,
        backgroundColor: '#aeafb1',
        margin: height * 0.015,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
    }
   


})