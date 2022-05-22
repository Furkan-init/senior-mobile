import React, { useState } from 'react'
import { Dimensions, FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const { height, width } = Dimensions.get('window');



// Chapter'lar ve Chapter'lara bağlı subtopicler fetchlenecek
const Chapters = [
    {
        chapterId: '1cb98664-ad3a-4971-b3ce-2f0791001d49',
        chapterCode: 1,
        chapterName: 'Introduction',
        subtopics: [
            {
                subtopicId: 1,
                subtopicCode: 1.1,
                subtopicName: 'Subtopic 1 XX',
            },
            {
                subtopicId: 2,
                subtopicCode: 1.2,
                subtopicName: 'Subtopic 2 XX',
            },
            {
                subtopicId: 3,
                subtopicCode: 1.3,
                subtopicName: 'Subtopic 3 XX',
            },
            {
                subtopicId: 4,
                subtopicCode: 1.4,
                subtopicName: 'Subtopic 4 XX',
            },
            {
                subtopicId: 5,
                subtopicCode: 1.5,
                subtopicName: 'Subtopic 5 XX',
            },
            {
                subtopicId: 6,
                subtopicCode: 1.6,
                subtopicName: 'Subtopic 6 XX',
            },
            {
                subtopicId: 7,
                subtopicCode: 1.7,
                subtopicName: 'Subtopic 7 XX',
            },
            {
                subtopicId: 8,
                subtopicCode: 1.8,
                subtopicName: 'Subtopic 8 XX',
            },
        ]
    },
    {
        chapterId: '324c7571-de2b-4536-bcc3-cba03b0eb8fb',
        chapterCode: 2,
        chapterName: 'Lorem Ipsum X',
        subtopics: [
            {
                subtopicId: 1,
                subtopicCode: 2.1,
                subtopicName: 'Subtopic 1 XX',
            },
            {
                subtopicId: 2,
                subtopicCode: 2.2,
                subtopicName: 'Subtopic 2 XX',
            },
            {
                subtopicId: 3,
                subtopicCode: 2.3,
                subtopicName: 'Subtopic 3 XX',
            },
            {
                subtopicId: 4,
                subtopicCode: 2.4,
                subtopicName: 'Subtopic 4 XX',
            },
            {
                subtopicId: 5,
                subtopicCode: 2.5,
                subtopicName: 'Subtopic 5 XX',
            },
            {
                subtopicId: 6,
                subtopicCode: 2.6,
                subtopicName: 'Subtopic 6 XX',
            },
            {
                subtopicId: 7,
                subtopicCode: 2.7,
                subtopicName: 'Subtopic 7 XX',
            },
            {
                subtopicId: 8,
                subtopicCode: 2.8,
                subtopicName: 'Subtopic 8 XX',
            },
        ]
    },
    {
        chapterId: '2f3fce06-a3f4-45c8-8e75-7feb0128e215',
        chapterCode: 3,
        chapterName: 'Lorem Ipsum Y',
        subtopics: [
            {
                subtopicId: 1,
                subtopicCode: 3.1,
                subtopicName: 'Subtopic 1 XX',
            },
            {
                subtopicId: 2,
                subtopicCode: 3.2,
                subtopicName: 'Subtopic 1 XX',
            },

        ]
    },
    {
        chapterId: '5062a59f-0bf6-42e3-a066-23cad342ac89',
        chapterCode: 4,
        chapterName: 'Lorem Ipsum',
        subtopics: [
            {
                subtopicId: 1,
                subtopicCode: 4.1,
                subtopicName: 'Subtopic 1 XX',
            },
            {
                subtopicId: 2,
                subtopicCode: 4.2,
                subtopicName: 'Subtopic 1 XX',
            },

        ]
    },
    {
        chapterId: 'b1bd1e9e-aa68-4f73-a38c-0e9cd2e0c572',
        chapterCode: 5,
        chapterName: 'Lorem Ipsum',
        subtopics: [
            {
                subtopicId: 1,
                subtopicCode: 5.1,
                subtopicName: 'Subtopic 1 XX',
            },
            {
                subtopicId: 2,
                subtopicCode: 5.2,
                subtopicName: 'Subtopic 1 XX',
            },

        ]
    },
    {
        chapterId: 'f28890fd-69d7-4970-a5b0-b4ef3fa50c38',
        chapterCode: 6,
        chapterName: 'Lorem Ipsum',
        subtopics: [
            {
                subtopicId: 1,
                subtopicCode: 6.1,
                subtopicName: 'Subtopic 1 XX',
            },
            {
                subtopicId: 2,
                subtopicCode: 6.2,
                subtopicName: 'Subtopic 1 XX',
            },

        ]
    },
    {
        chapterId: '9847c5d2-8b65-4304-8f70-7fada940073a',
        chapterCode: 7,
        chapterName: 'Lorem Ipsum',
        subtopics: [
            {
                subtopicId: 1,
                subtopicCode: 7.1,
                subtopicName: 'Subtopic 1 XX',
            },
            {
                subtopicId: 2,
                subtopicCode: 7.2,
                subtopicName: 'Subtopic 1 XX',
            },

        ]
    },
    {
        chapterId: '8f5b2dc0-3af4-40b2-9cca-5dfa41bce014',
        chapterCode: 8,
        chapterName: 'Lorem Ipsum',
        subtopics: [
            {
                subtopicId: 1,
                subtopicCode: 8.1,
                subtopicName: 'Subtopic 1 XX',
            },
            {
                subtopicId: 2,
                subtopicCode: 8.2,
                subtopicName: 'Subtopic 1 XX',
            },

        ]
    },
    {
        chapterId: '507c6a57-d89f-4429-8bb0-70217a169e70',
        chapterCode: 9,
        chapterName: 'Lorem Ipsum',
        subtopics: [
            {
                subtopicId: 1,
                subtopicCode: 9.1,
                subtopicName: 'Subtopic 1 XX',
            },
            {
                subtopicId: 2,
                subtopicCode: 9.2,
                subtopicName: 'Subtopic 1 XX',
            },

        ]
    },
];

const SubtopicView = ((navigation: any, subtopic : any) => {
    // console.log(subtopic);
   
    return (
        subtopic.map((item: any) => (
            <Pressable style={styles.subtopicContainer} 
            key = {item.subtopicId}
            onPress={() => navigation.navigate('Subtopic',{
                subtopicName: item.subtopicName,
              })}
            >
                <Text>{item.subtopicName}</Text>
            </Pressable>))
    );
}
);


const ChapterView = ({ chapter }: any) => {
    const [hasOpened, setOpened] = useState(false);
    const navigation = useNavigation();

    return (
        <Pressable style={styles.chapterContainer} 
        key = {chapter.chapterId}
        onPress={() => setOpened(!hasOpened)}
        >
            <Text style={styles.chapterContainerName}>{` Chapter ${chapter.chapterCode} : ${chapter.chapterName}`}</Text>
            {hasOpened && SubtopicView(navigation, chapter.subtopics)}
        </Pressable>
    );
};





const ChapterScreen = () => {
    // const renderItem = ({ item }: any) => (
    //     <ChapterView chapter={item}/>
    //   );

    const renderItem = (({ item }: any) => {
        // console.log(item);
        return (
            <ChapterView chapter={item} />
        );
    }
    );

    return (
        <SafeAreaView style={styles.chapterViewContainer}>
            <FlatList
                data={Chapters}
                renderItem={renderItem}
                keyExtractor={item => item.chapterId}
            />
        </SafeAreaView>
    )
}

export default ChapterScreen

const styles = StyleSheet.create({
    chapterViewContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#27ae60',
    },
    chapterContainer: {
        backgroundColor: 'aquamarine',
        // height: 0.15*height,
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 5,
        borderRadius: 8,
    },
    chapterContainerName: {
        paddingLeft: 15,
        fontSize: 22,
    },
    subtopicContainer: {
        marginVertical: 8,
        marginHorizontal: 25,
        backgroundColor: 'green',
        // opacity: 0.5,
        borderRadius: 10,
        padding: 10,
    },
    subtopicText: {
        // paddingLeft : 10,
        padding: 10,
        color: 'black',
    }
})
