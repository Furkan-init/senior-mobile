import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, StyleSheet, View, Text, Pressable, Dimensions, Modal, Button } from 'react-native'
import Top from '../Components/Top';
import Substance from '../Components/Substance';
import Bottom from '../Components/Bottom';
import Question from '../Components/Question';
import Timer from '../Components/Timer';
import QuizScreen2 from './QuizScreen2';

const { height, width } = Dimensions.get('window');

const getOneQuiz = [
    {
        question_duration: 10,
        question_image: '',
        question_clause: 'd4075a6e-cb16-4e86-9465-017d6235a848',
        question_answers: [
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
        ],
    },
    {
        question_duration: 15,
        question_image: '',
        question_clause: 'd4075a6e-cb16-4e86-9465-017d6235a848',
        question_answers: [
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
        ],
    },
    {
        question_duration: 5,
        question_image: '',
        question_clause: 'd4075a6e-cb16-4e86-9465-017d6235a848',
        question_answers: [
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
        ],
    },
    {
        question_duration: 20,
        question_image: '',
        question_clause: 'd4075a6e-cb16-4e86-9465-017d6235a848',
        question_answers: [
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
        ],
    },
    {
        question_duration: 5,
        question_image: '',
        question_clause: 'd4075a6e-cb16-4e86-9465-017d6235a848',
        question_answers: [
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
        ],
    },
    {
        question_duration: 10,
        question_image: '',
        question_clause: 'd4075a6e-cb16-4e86-9465-017d6235a848',
        question_answers: [
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
        ],
    },
    {
        question_duration: 10,
        question_image: '',
        question_clause: 'd4075a6e-cb16-4e86-9465-017d6235a848',
        question_answers: [
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
        ],
    },
    {
        question_duration: 15,
        question_image: '',
        question_clause: 'd4075a6e-cb16-4e86-9465-017d6235a848',
        question_answers: [
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
            { answer: 'd4075a6e-cb16-4e86-9465-017d6235a848' },
        ],
    },
];


const QuizScreen = () => {

    // Context Api    
    //    console.log( getOneQuiz[0]);

    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [question, setQuestion] = useState(getOneQuiz[currentQuestionNumber]);
    

    return (
        <View style={styles.quizScreenContainer}>
            <QuizScreen2 />
        </View>
    )
}

export default QuizScreen

const styles = StyleSheet.create({
    quizScreenContainer: {
        flex: 1,
        backgroundColor: '#ffc048',
        alignItems: 'center'
    },
    quizImage: {
        height: width * 0.6,
        width: width * 0.6,
        marginBottom: 10,
        backgroundColor: 'aquamarine',
    },
    choiceContainerSpaceHolder: {
        height: 100,
    },
    questionCreatorOption: {
        // height: height * 0.06,
        padding: 15,
        width: width * 0.8,
        borderRadius: 5,
        marginTop: height * 0.015,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionCreatorOptionSelected: {
        borderWidth: width * 0.02,
        borderColor: '#dc2430',
        height: height * 0.065,
        width: width * 0.8,
        borderRadius: 5,
        marginTop: height * 0.015,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionNavigator: {
        height: '100%',
        width: width * 0.1,
        backgroundColor: '#01a3a4',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    bottomDirectionContainer: {
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: '#1dd1a1',
        bottom: height * 0.08,
        height: height * 0.08,
        width: width * 0.8,
        alignItems: 'center',

    },
    bottomNavigationModalButton: {
        backgroundColor: 'red',
        height: height * 0.07,
        padding: height * 0.01,
        borderRadius: 8,
        justifyContent: 'center',

    },
    bottomNavigationContainer: {
        width: width * 0.8,
        height: height * 0.07,
        bottom: height * 0.04,
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: '#1dd1a1',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomNavigationArrowGroup: {
        height: '90%',
        flexDirection: 'row',
    },
    bnCompleteQuiz: {
        height: 50,
        backgroundColor: '#01a3a4',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    completeRemark: {
        position: 'absolute',
        height: height * 0.3,
        width: width * 0.7,
        backgroundColor: '#01a3a4',
        opacity: 0.95,
        borderRadius: 8,
        left: (width * 0.3) * 0.5,
        top: height * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalImage: {
        height: 50,
        width: 50,

    },
    bottomNavigationModalButtonContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
    },
    bottomNavigationModalText: {
        padding: 20,
        fontSize: 22,
    },
    buttonGroup: {
        // width: 200,
        marginHorizontal: 30,
        marginVertical: 10,
        // height: 50,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#1dd1a1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btIndividualGroup: {
        width: 30,
        height: 40,
        backgroundColor: '#01a3a4',
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btCurrentIndividualGroup: {
        width: 30,
        height: 40,
        backgroundColor: '#00b894',
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btIndividualGroupText: {
        fontSize: 25,
        color: '#c8d6e5',
    },
    currentQuestionContainer: {
        backgroundColor: '#ff5e57',
        borderRadius: 5,
        padding: 20,
        width: width * 0.9,
    },
    currentQuestionContainerText: {
        fontSize: 20,
    },
    quizScreenScrollable: {

        width: width,
    },
    quizScreenSkeleton: {
        alignItems: 'center',

    },
    bottomNavigationModalButtonCompletion: {
        backgroundColor: 'red',
        height: height * 0.07,
        padding: height * 0.01,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }

})
