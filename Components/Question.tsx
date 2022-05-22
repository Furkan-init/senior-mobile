import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Timer from './Timer'

const Question = () => {

    // Quizler burada cekilecek

    const quiz = [
        {
            id: '3b9c05c0-6f9b-11ec-90d6-0242ac120003',
            question: 'question 1',
            duration: 5,
            options: [{ option: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }, { option: 'option 2' },
            { option: 'option 3' }, { option: 'option 4' },]
        },
        {
            id: 'd66d78e6-f2e3-4903-9354-5c7e41b6ba32',
            question: 'question 2',
            duration: 5,
            options: [{ option: 'option 1' }, { option: 'option 2' },
            { option: 'option 3' },]
        },
        {
            id: '0c17596e-ff66-44c0-81ab-c7a4b5731bba',
            question: 'question 3',
            duration: 5,
            options: [{ option: 'option 1' }, { option: 'option 2' },
            { option: 'option 3' }, { option: 'option 4' }, { option: 'option 5' },]
        },
        {
            id: 'a8fb486c-2df5-444a-b71b-7e0793257ca7',
            question: 'question 4',
            duration: 5,
            options: [{ option: 'option 1' }, { option: 'option 2' },
            { option: 'option 3' }, { option: 'option 4' },]
        },
        {
            id: '3319f296-51bb-4dd2-83b2-240c3079f48d',
            question: 'question 5',
            duration: 5,
            options: [{ option: 'option 1' }, { option: 'option 2' },
            { option: 'option 3' }, { option: 'option 4' },]
        },
        {
            id: '32044bea-6d30-4791-806c-8c4a95028431',
            question: 'question 6',
            duration: 5,
            options: [{ option: 'option 1' }, { option: 'option 2' },
            { option: 'option 3' }, { option: 'option 4' },]
        },
        {
            id: '235658b5-e9d6-4e08-ab51-329d51e00d8b',
            question: 'question 7',
            duration: 5,
            options: [{ option: 'option 1' }, { option: 'option 2' },
            { option: 'option 3' }, { option: 'option 4' },]
        },
        {
            id: '397cb27d-b166-44bd-b505-bca7d420b08d',
            question: 'question 8',
            duration: 5,
            options: [{ option: 'option 1' }, { option: 'option 2' },
            { option: 'option 3' }, { option: 'option 4' },]
        },

    ];

    const quizLenght = quiz.length;
    const [currentQuestion, setcurrentQuestion] = useState(0);


    return (
        <View>
              {/* <Timer duration={quiz[currentQuestion].duration}  key={'LocalTimer2'} /> */}
            <Text>{quiz[currentQuestion].question}</Text>
            {/* <Text>{currentQuestion}</Text> */}
            <Pressable 
            style={styles.lowerButton}
            onPress={() => setcurrentQuestion(currentQuestion - 1)}
            disabled={currentQuestion <= 0}
            >
                <Text>--</Text>
            </Pressable>
            <Pressable onPress={() => setcurrentQuestion(currentQuestion + 1)}
             style={styles.lowerButton}
             disabled={currentQuestion >= quizLenght-1}
            >
                <Text>++</Text>
            </Pressable>
        </View>
    )
}

export default Question

const styles = StyleSheet.create({
    lowerButton: {
        height : 30,
        width: 30,
        backgroundColor : 'aquamarine',
    }
})