import React from 'react'
import { Button, Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'


import { StackActions, useNavigation } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const { height, width } = Dimensions.get('window');
const popAction = StackActions.pop(1);

const ICON_SIZE = height * 0.05;

import userData from '../Components/UserData';



const HomeScreen = ({ route, navigation }: any) => {

    const { userType } = route.params;

    // Distinguish The User Recommended Array
    const userDataRecommended = userData[1].userRecommendedMaterials;

    // FLATLIST OF Recommended
    const renderItemMisc = ({ item }: any) => (
        <ItemMisc item={item} />
    );

    const ItemMisc = ({ item }: any) => {

        const customIcon = () => {
            if (item.materialType === 'VIDEO') return <AntDesign name="youtube" size={ICON_SIZE} color="black" />
            else if (item.materialType === 'PDF') return <AntDesign name="pdffile1" size={ICON_SIZE} color="black" />
            else if (item.materialType === 'DOCX') return <AntDesign name="wordfile1" size={ICON_SIZE} color="black" />
            else if (item.materialType === 'PPTX') return <AntDesign name="pptfile1" size={ICON_SIZE} color="black" />
            else if (item.materialType === 'XLSS') return <AntDesign name="exclefile1" size={ICON_SIZE} color="black" />
            else return <AntDesign name="questioncircle" size={ICON_SIZE} color="black" />
        }

        return (
            item.materialType === 'VIDEO' ?
                <Pressable
                    style={styles.chapterDistinguishContainerSpecificChapterAll}
                    onPress={() => navigation.navigate('VideoPlayer', { link: item.materialLink })}
                >
                    <AntDesign name="youtube" size={ICON_SIZE} color="black" />
                    <Text
                        style={{ marginTop: '15%' }}
                    >{item.materialName}</Text>

                </Pressable> : <Pressable
                    style={styles.chapterDistinguishContainerSpecificChapterAll}
                    onPress={() => navigation.navigate('PdfViewer', { link: item.materialLink })}
                >
                    {customIcon()}
                    <Text
                        style={{ marginTop: '15%' }}
                    >{item.materialName}</Text>
                </Pressable>
        )
    }

    return (
        <View style={styles.homeScreenMainContainer}>
            <Pressable style={styles.homeScreenMainContainerLogOutButton}
            onPress={() => navigation.dispatch(popAction)}
            >
                <Ionicons name="exit" size={35} color="gray" />
                </Pressable>
            <Text
                style={styles.homescreenLeaderBoardText}
            >LeaderBoard</Text>
            <View style={styles.homeScreenLeaderBoardContainer}>
                <View style={styles.homeScreenFirstStudentContainer}>
                    <View style={styles.homeScreenFirstStudentContainerMedal} >
                    <FontAwesome5 name="medal" size={50} color="gold" />
                    </View>
                    <View style={styles.homeScreenFirstStudentContainerBadge} >
                    <FontAwesome5 name="jedi-order" size={50} color="#18dcff" />
                    </View>
                    <Image
                        style={styles.homeScreenFirstStudentImageContainer}
                        source={{
                            uri: userData[0].userProfilePhotoLink
                        }}
                    />
                    <View style={styles.homeScreenFirstStudentSubstanceContainer} >
                        <Text
                        style={{color:'#18dcff', fontSize: 22, fontWeight: '400'}}
                        >{userData[0].userName}</Text>
                        <Text
                         style={{color:'#18dcff', fontSize: 22, fontWeight: '400'}}
                        >{userData[0].userSurname}</Text>
                        <Text
                         style={{color:'#18dcff', fontSize: 22, fontWeight: '400'}}
                        >Score : {userData[0].userScore}</Text>
                    </View>
                </View>

                <View style={styles.homeScreenSecondThirdStudentContainer}>
                    <View style={styles.homeScreenSecondStudentContainer}>
                    <View style={styles.homeScreenSecondStudentContainerMedal} >
                    <FontAwesome5 name="medal" size={30} color="silver" />
                    </View>
                        <Image
                            style={styles.homeScreenSecondStudentImageContainer}
                            source={{
                                uri: userData[1].userProfilePhotoLink
                            }}
                        />
                        <View style={styles.homeScreenSecondStudentSubstanceContainer} >
                            <Text
                             style={{color:'#18dcff', fontSize: 18, fontWeight: '400'}}
                            >{userData[1].userName}</Text>
                            <Text
                            style={{color:'#18dcff', fontSize: 18, fontWeight: '400'}}
                            >{userData[1].userSurname}</Text>
                            <Text
                            style={{color:'#18dcff', fontSize: 16, fontWeight: '400'}}
                            >Score : {userData[1].userScore}</Text>
                        </View>
                    </View>

                    <View style={styles.homeScreenThirdStudentContainer} >
                    <View style={styles.homeScreenSecondStudentContainerMedal} >
                    <FontAwesome5 name="medal" size={30} color="#CD7F32" />
                    </View>
                        <Image
                            style={styles.homeScreenSecondStudentImageContainer}
                            source={{
                                uri: userData[2].userProfilePhotoLink
                            }}
                        />
                        <View style={styles.homeScreenSecondStudentSubstanceContainer} >
                            <Text
                             style={{color:'#18dcff', fontSize: 18, fontWeight: '400'}}
                            >{userData[2].userName}</Text>
                            <Text
                             style={{color:'#18dcff', fontSize: 18, fontWeight: '400'}}
                            >{userData[2].userSurname}</Text>
                            <Text
                             style={{color:'#18dcff', fontSize: 18, fontWeight: '400'}}
                            >Score : {userData[2].userScore}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.homeScreenForthFifthStudentContainer}>
                    <View style={styles.homeScreenForthStudentContainer}>
                        <Image
                            style={styles.homeScreenForthStudentImageContainer}
                            source={{
                                uri: userData[3].userProfilePhotoLink
                            }}
                        />
                        <View style={styles.homeScreenForthStudentSubstanceContainer} >
                            <View
                                style={{ flexDirection: 'row' }}
                            >
                                <Text
                                 style={{color:'#18dcff', fontSize: 16, fontWeight: '400'}}
                                >{userData[3].userName} </Text>
                                <Text
                                style={{color:'#18dcff', fontSize: 16, fontWeight: '400'}}
                                >{userData[3].userSurname}</Text>
                            </View>
                            <Text
                            style={{color:'#18dcff', fontSize: 16, fontWeight: '400'}}
                            >Score : {userData[3].userScore}</Text>
                        </View>
                    </View>
                    <View style={styles.homeScreenForthStudentContainer}>
                        <Image
                            style={styles.homeScreenForthStudentImageContainer}
                            source={{
                                uri: userData[4].userProfilePhotoLink
                            }}
                        />
                        <View style={styles.homeScreenForthStudentSubstanceContainer} >
                            <View
                                style={{ flexDirection: 'row' }}
                            >
                                <Text
                                 style={{color:'#18dcff', fontSize: 16, fontWeight: '400'}}
                                >{userData[4].userName} </Text>
                                <Text
                                 style={{color:'#18dcff', fontSize: 16, fontWeight: '400'}}
                                >{userData[4].userSurname}</Text>
                            </View>
                            <Text
                             style={{color:'#18dcff', fontSize: 16, fontWeight: '400'}}
                            >Score : {userData[4].userScore}</Text>
                        </View>
                    </View>
                </View>

            </View>
            
       {     userType == 'unsuccessful' ?
             <View style={styles.homeScreenRecommendedMaterialContainer} >
                <View style={styles.homeScreenRecommendedMaterialContainerTextView}>
                    <Text
                        style={styles.homeScreenRecommendedMaterialContainerText}
                    >Recommended Materials</Text>
                </View>
                <FlatList
                    horizontal
                    data={userDataRecommended}
                    renderItem={renderItemMisc}
                    keyExtractor={item => item.materialId}
                />
            </View> : null}
            

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    homeScreenMainContainer: {
        flex: 1,
        backgroundColor: '#212529',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeScreenLeaderBoardContainer: {
        height: height * 0.6,
        width: width * 0.9,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // backgroundColor: 'red',
    },
    homeScreenRecommendedMaterialContainer: {
        height: height * 0.22,
        width: width * 0.9,
        backgroundColor: '#4a69bd',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#18dcff',
        borderWidth: 3,
    },
    homeScreenFirstStudentContainer: {
        height: height * 0.2,
        width: width * 0.7,
        backgroundColor: '#4a69bd',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#18dcff',
        // justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    homeScreenSecondThirdStudentContainer: {
        height: height * 0.15,
        width: width * 0.9,
        // backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    homeScreenForthFifthStudentContainer: {
        height: height * 0.15,
        width: width * 0.7,
        // backgroundColor: 'yellow',
        justifyContent: 'space-around',
    },
    homeScreenSecondStudentContainer: {
        height: height * 0.13,
        width: width * 0.4,
        borderWidth: 3,
        borderColor: '#18dcff',
        backgroundColor: '#4a69bd',
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    homeScreenThirdStudentContainer: {
        height: height * 0.13,
        width: width * 0.4,
        borderWidth: 3,
        backgroundColor: '#4a69bd',
        borderColor: '#18dcff',
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    homeScreenForthStudentContainer: {
        height: height * 0.07,
        width: width * 0.7,
        borderWidth: 3,
        backgroundColor: '#4a69bd',
        borderColor: '#18dcff',
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    homeScreenFirstStudentImageContainer: {
        height: height * 0.07,
        width: height * 0.07,
        borderWidth: 2,
        marginLeft: height * 0.02,
        marginTop: width * 0.05,
        borderRadius: 20,
    },
    homeScreenFirstStudentSubstanceContainer: {
        height: height * 0.15,
        width: width * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#18dcff',
    },
    homeScreenSecondStudentImageContainer: {
        height: height * 0.05,
        width: height * 0.05,
        borderWidth: 2,
        // backgroundColor: 'yellow',
        borderRadius: 15,
        marginTop: width * 0.03, 
    },
    homeScreenSecondStudentSubstanceContainer: {
        height: height * 0.1,
        width: width * 0.25,
        justifyContent: 'center',
        alignItems: 'center',

    },
    homeScreenForthStudentImageContainer: {
        height: height * 0.05,
        width: height * 0.05,
        borderWidth: 2,
        borderRadius: 15,
        // backgroundColor: 'yellow',
    },
    homeScreenForthStudentSubstanceContainer: {
        height: height * 0.05,
        width: width * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homescreenLeaderBoardText: {
        borderRadius: 15,
        color: 'white',
        fontWeight: '600',
        fontSize: 22,
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
    },
    homeScreenRecommendedMaterialContainerTextView: {
        // backgroundColor: '#3c6382',
        borderRadius: 5,
        alignItems: 'center',
        width: width * 0.65,
        margin: 2,
    },
    homeScreenRecommendedMaterialContainerText: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#18dcff',
        fontWeight: '600',
    },
    homeScreenFirstStudentContainerMedal : {
        position: 'absolute',
        bottom: height * 0.13,
        left: width * 0.01,
    },
    homeScreenSecondStudentContainerMedal: {
        position: 'absolute',
        bottom: height * 0.085,
        left: width * 0.01,
    },
    homeScreenThirdStudentContainerMedal: {
        position: 'absolute',
        bottom: height * 0.085,
        left: width * 0.01,
    },
    homeScreenFirstStudentContainerBadge : {
        position: 'absolute',
        bottom: height * 0.13,
        left: width * 0.16,
    },
    homeScreenMainContainerLogOutButton : {
        position: 'absolute',
        right: width * 0.01,
        top: height * 0.003,
    }
})
