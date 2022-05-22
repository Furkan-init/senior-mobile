import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, StyleSheet, View, Text, Pressable, Dimensions, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { StackActions, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Timer from '../Components/Timer';
import Counter from '../Components/Counter';

const { height, width } = Dimensions.get('window');

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
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        duration: 5,
        options: [{ option: 'option 1' }, { option: 'option 2' },
        { option: 'option 3' },]
    },
    {
        id: '0c17596e-ff66-44c0-81ab-c7a4b5731bba',
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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

const QuizScreen2 = () => {
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [answerCollection, setAnswerCollection] = useState([[]]);
    
    const [durationCollection, setdurationCollection] = useState([]);
    const [duration, setduration] = useState(-1);
    const questionNumber = quiz.length;

    const popAction = StackActions.pop(1);
    const navigation = useNavigation();

  

    // const counter = useRef(20);

    const offset = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
          transform: [{ translateX: withSpring(offset.value * 255 )}],
        };
      });


    function update(index: any, newValue: any) {
        const newArray: any = [...answerCollection];
        newArray[index] = newValue;
        setAnswerCollection(newArray);
    }

    function updateDurationCollection(index: any, newValue: any) {
        const newArray: any = [...durationCollection];
        newArray[index] = newValue;
        setdurationCollection(newArray);
    }

   
    useEffect(() => {
        if (typeof durationCollection[currentQuestion] === 'undefined')
            setduration(quiz[currentQuestion].duration)

        offset.value = 0;
    }, [currentQuestion]);


    const QuestionCreator = ({ currentQuestionObj }: any) => {

        const options = currentQuestionObj.options.map((item: any, index: any) => {

            return (
                <Pressable
                    key={index}
                    disabled={duration <= 0}
                    onPress={async () => {
                        update(currentQuestion, index == answerCollection[currentQuestion] ? undefined : index);
                    }}
                >
                     <LinearGradient
        // Button Linear Gradient
        colors={index == answerCollection[currentQuestion] ? ['#7b4397', '#dc2430'] : ['#b24592', '#f1a15f']}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.questionCreatorOption}
        >
         <Text
         >{item.option}</Text>
      </LinearGradient>
                </Pressable>);
        });



        return (
            <View style={styles.quizScreenSkeleton}>
                 {/* <Timer duration={durationCollection[currentQuestion]} /> */}
                {/* <Text> {duration}</Text> */}
                {/* <Text> {counter.current}</Text> */}
                <View style={styles.quizImage} />
                <Animated.View style={[animatedStyles]} >
                <View style={styles.currentQuestionContainer}>
                    <Text
                        style={styles.currentQuestionContainerText}
                        adjustsFontSizeToFit
                    >{currentQuestionObj.question}</Text>
                </View>
                {options}
                </Animated.View>
            </View>
        );
    }

    const GenerateButton = () => {
        const buttonContainer = [];

        for (let i = 0; i < questionNumber; i++) {
            buttonContainer.push(
                <Pressable style={i == currentQuestion ? styles.btCurrentIndividualGroup : styles.btIndividualGroup}
                    key={i}
                    onPress={() => setcurrentQuestion(i)}
                >
                    <Text style={styles.btIndividualGroupText}
                        adjustsFontSizeToFit
                    >{i + 1}</Text>
                </Pressable>
            );
        }

        return (
            <View style={styles.buttonGroup} >
                {buttonContainer}
            </View>
        )

    }

    const BottomNavigation = () => {
        const [openModal, setopenModal] = useState(false);


        return (
            <View style={styles.bottomNavigationContainer}>
                <View style={styles.bottomNavigationArrowGroup}>
                    <Pressable style={styles.questionNavigator}
                        onPress={() => {
                            offset.value = -30;
                            setcurrentQuestion(currentQuestion - 1);
                            updateDurationCollection(currentQuestion, duration);
                        }}
                        disabled={currentQuestion <= 0}
                    >
                        <Ionicons name="ios-arrow-back-outline" size={24} color="#c8d6e5" />
                    </Pressable>
                    <Pressable style={styles.questionNavigator}
                        onPress={() => {
                            offset.value = 30;
                            setcurrentQuestion(currentQuestion + 1);
                            updateDurationCollection(currentQuestion, duration);
                        }}
                        disabled={currentQuestion >= quiz.length - 1}
                    >
                        <Ionicons name="ios-arrow-forward-outline" size={24} color="#c8d6e5" />
                    </Pressable>
                </View>
                <Pressable style={styles.bnCompleteQuiz}
                    onPress={() => setopenModal(!openModal)}
                >
                    <Text
                        adjustsFontSizeToFit
                    >Complete Quiz</Text>
                </Pressable>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={openModal}
                >
                    <View style={styles.completeRemark}>
                        <Ionicons name="exit" size={50} color="black" />
                        <Text style={styles.bottomNavigationModalText}>Do you want to complete quiz ?</Text>
                        <View style={styles.bottomNavigationModalButtonContainer}>
                            <Pressable style={styles.bottomNavigationModalButton}
                                onPress={() => setopenModal(!openModal)}
                            >
                                <Text>Continue</Text>
                            </Pressable>
                            <Pressable style={styles.bottomNavigationModalButton}
                                onPress={() => navigation.dispatch(popAction)}
                            >
                                <Text>Complete</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }



    // console.log(` Current Quest : ${currentQuestion}`);
   // console.log(multipleAnswerCollection);
   console.log(answerCollection);
//    setTimeout(() => {
//     console.log(answerCollection);
//    }, 2000);
    // console.log(totalDuration);
    // console.log(totalDuration);


    return (
        <View style={styles.quizScreenContainer}>
              {/* <Text> {totalDuration}</Text> */}
            <GenerateButton />
            <ScrollView style={styles.quizScreenScrollable}
                showsVerticalScrollIndicator={false}
            >
            
                < QuestionCreator currentQuestionObj={quiz[currentQuestion]} />
                <View style = {styles.choiceContainerSpaceHolder} />
            </ScrollView>
            <BottomNavigation />
            {/* <Modal
                    animationType="slide"
                    transparent={true}
                    visible={totalDuration == 0}
                >
                    <View style={styles.completeRemark}>
                        <Ionicons name="exit" size={50} color="black" />
                        <Text style={styles.bottomNavigationModalText}>Time is Up</Text>
                        <View >
                            <Pressable style={styles.bottomNavigationModalButtonCompletion}
                                onPress={() => navigation.dispatch(popAction)}
                            >
                                <Text>Complete</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal> */}
        </View>
    )
}

export default QuizScreen2

const styles = StyleSheet.create({
    quizScreenContainer: {
        flex: 1,
        backgroundColor: '#ffc048',
        alignItems: 'center'
    },
    quizImage: {
        height: width * 0.6,
        width: width * 0.6,
        marginBottom : 10,
        backgroundColor: 'aquamarine',
    },
    choiceContainerSpaceHolder: {
        height: 100,
    },
    questionCreatorOption: {
        // height: height * 0.06,
        padding : 15,
        width: width * 0.9,
        borderRadius : 5,
        marginTop: height * 0.015,
        justifyContent : 'center',
        alignItems : 'center',
    },
    questionCreatorOptionSelected : {
        borderWidth : width * 0.02,
        borderColor :'#dc2430',
        height: height * 0.065,
        width: width * 0.8,
        borderRadius : 5,
        marginTop: height * 0.015,
        justifyContent : 'center',
        alignItems : 'center',
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
        padding :  height * 0.01,
        borderRadius: 8,
        justifyContent: 'center',
       
    },
    bottomNavigationContainer: {
       width : width * 0.8,
       height : height * 0.07,
        bottom: height * 0.04,
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: '#1dd1a1',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomNavigationArrowGroup: {
        height : '90%',
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
        borderRadius : 5,
        padding : 20,
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
    bottomNavigationModalButtonCompletion : {
        backgroundColor: 'red',
        height: height * 0.07,
        padding :  height * 0.01,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems : 'center',
    }

})
