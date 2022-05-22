import React from 'react'
import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



const { height, width } = Dimensions.get('window');

const events = [
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


const EventScreen = () => {


    const EventlistView = ({header, instructor} : any) => {
        const navigation = useNavigation();

        return (
            <Pressable style={styles.eventListViewContainer}
            onPress={() => navigation.navigate('Courses2')}
            >
                {/* <Ionicons name="ios-cloud-offline-sharp" size={24} color="black" /> */}
                <Ionicons style={styles.eventListIcon} name="ios-cloud-sharp" size={40} color="#10ac84" />
                <View style={styles.customFlatTag} >
                    <Text style={styles.title}>{header}</Text>
                    <Text style={styles.instructor}>{instructor}</Text>
                </View>
            </Pressable>
        );
    }

    const renderEventList = ({item}: any) => (
        <EventlistView header={item.title} instructor={item.instructor} />
    )

    return (
        <View style={styles.eventContainer}>
            <FlatList
                data={events}
                renderItem={renderEventList}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.eventScreenBottomSheet} />
          
        </View>
    )
}

export default EventScreen

const styles = StyleSheet.create({
    eventContainer: {
        flex: 1,
        backgroundColor: '#cf6a87'
    },
    eventListViewContainer: {
        height: 100,
        backgroundColor: '#e15f41',
        marginTop: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection:'row',
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
      eventScreenBottomSheet : {
          position : 'absolute',
          width,
          height,
          backgroundColor : '#f39c12',
          transform: [{translateY: height}],
          borderRadius : 32,
      }

})
