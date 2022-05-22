import React from 'react'
import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

const events = [
    {
        id: '3b9c05c0-6f9b-11ec-90d6-0242ac120003',
        title: 'ADA 442',
        questionNumber: '6',
        instructor: 'Instructor 1',
        quizLink: 'https://www.onlinequizcreator.com/ada-442/quiz-485071',
    },
    {
        id: '4673f03e-6f9b-11ec-90d6-0242ac120003',
        title: 'CMPE 472',
        questionNumber: '3',
        instructor: 'Instructor 4',
        quizLink: 'https://www.onlinequizcreator.com/cmpe-472-quiz/quiz-485076',
    },
    {
        id: '4c12a1f2-6f9b-11ec-90d6-0242ac120003',
        title: 'CMPE 316',
        questionNumber: '5',
        instructor: 'Instructor 3',
        quizLink: 'https://www.onlinequizcreator.com/cmpe-316-quiz/quiz-485077',
    },
    {
        id: '5090faee-6f9b-11ec-90d6-0242ac120003',
        title: 'CMPE 322',
        questionNumber: '4',
        instructor: 'Instructor 8',
        quizLink: 'https://www.onlinequizcreator.com/cmpe-322-quiz/quiz-485078',
    },
];


const EventScreen = () => {


    const EventlistView = ({item} : any) => {
        const navigation = useNavigation();

        return (
            <Pressable style={styles.eventListViewContainer}
            onPress={() => navigation.navigate('Form', {link: item.quizLink })}
            >
                {/* <Ionicons name="ios-cloud-offline-sharp" size={24} color="black" /> */}
                <Ionicons style={styles.eventListIcon} name="ios-cloud-sharp" size={40} color="#10ac84" />
                <View style={styles.customFlatTag} >
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.instructor}>quiz number :{item.questionNumber}</Text>
                    <Text style={styles.instructor}>{item.instructor}</Text>
                </View>
            </Pressable>
        );
    }

    const renderEventList = ({item}: any) => (
        <EventlistView item={item}  />
    )

    return (
        <View style={styles.eventContainer}>
            <FlatList
                data={events}
                renderItem={renderEventList}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default EventScreen

const styles = StyleSheet.create({
    eventContainer: {
        flex: 1,
        backgroundColor: '#212529'
    },
    eventListViewContainer: {
        height: 100,
        backgroundColor: 'green',
        marginTop: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection:'row',
        borderWidth:3,
        borderColor: '#18dcff',
    },
    eventListIcon : {
        marginLeft: '5%'
    },
    customFlatTag : {
        // backgroundColor: 'yellow',
        marginLeft:'5%',
        height: '80%',
        width: '55%',
        justifyContent: 'center',
      },
      title: {
        fontSize: 25,
      },
      instructor: {
        fontSize: 20,
        // marginTop: 5,
      },

})
