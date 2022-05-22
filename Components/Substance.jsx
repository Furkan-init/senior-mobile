import React, { useEffect, useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { StackActions, useNavigation } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
const { height, width } = Dimensions.get('window');

const quiz = [
  {
    id: '3b9c05c0-6f9b-11ec-90d6-0242ac120003',
    question: 'question 1',
    duration: 10,
    options: [{ option: 'option 1-1' }, { option: 'option 2' },
    { option: 'option 3' }, { option: 'option 4' },]
  },
  {
    id: 'd66d78e6-f2e3-4903-9354-5c7e41b6ba32',
    question: 'question 2',
    duration: 15,
    options: [{ option: 'option 1' }, { option: 'option 2' },
    { option: 'option 3' }, { option: 'option 4' },]
  },
  {
    id: '0c17596e-ff66-44c0-81ab-c7a4b5731bba',
    question: 'question 3',
    duration: 20,
    options: [{ option: 'option 1' }, { option: 'option 2' },
    { option: 'option 3' }, { option: 'option 4' },]
  },
  {
    id: 'a8fb486c-2df5-444a-b71b-7e0793257ca7',
    question: 'question 4',
    duration: 15,
    options: [{ option: 'option 1' }, { option: 'option 2' },
    { option: 'option 3' }, { option: 'option 4' },]
  },
  {
    id: '3319f296-51bb-4dd2-83b2-240c3079f48d',
    question: 'question 5',
    duration: 10,
    options: [{ option: 'option 1' }, { option: 'option 2' },
    { option: 'option 3' }, { option: 'option 4' },]
  },
  {
    id: '32044bea-6d30-4791-806c-8c4a95028431',
    question: 'question 6',
    duration: 13,
    options: [{ option: 'option 1' }, { option: 'option 2' },
    { option: 'option 3' }, { option: 'option 4' },]
  },
  {
    id: '235658b5-e9d6-4e08-ab51-329d51e00d8b',
    question: 'question 7',
    duration: 12,
    options: [{ option: 'option 1' }, { option: 'option 2' },
    { option: 'option 3' }, { option: 'option 4' },]
  },
  {
    id: '397cb27d-b166-44bd-b505-bca7d420b08d',
    question: 'question 8',
    duration: 11,
    options: [{ option: 'option 1' }, { option: 'option 2' },
    { option: 'option 3' }, { option: 'option 4' },]
  },

];

const Substance = () => {
  //React Navigation props
  const popAction = StackActions.pop(1);
  const navigation = useNavigation();

  // Prop Drilling Varmi kontrol et
   const currentQuestion = quiz[0];

  const [imageZoom, setimageZoom] = useState(false);
  const [answerCollection, setAnswerCollection] = useState([[]]);
  const [durationCollection, setdurationCollection] = useState([]);
  const [duration, setduration] = useState(-1);

  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(offset.value * 255) }],
    };
  });

  function update(index, newValue) {
    const newArray = [...answerCollection];
    newArray[index] = newValue;
    setAnswerCollection(newArray);
  }

  function updateDurationCollection(index, newValue) {
    const newArray = [...durationCollection];
    newArray[index] = newValue;
    setdurationCollection(newArray);
  }

  // currentQuestionObj = quiz[0];
  
  const QuestionCreator = ({ currentQuestionObj }) => {

    const options = currentQuestionObj.options.map((item, index) => {

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
             
            {/* <Text> {duration}</Text> */}
            {/* <Text> {counter.current}</Text> */}
            <View style={styles.quizImage} />
            <Animated.View style={[animatedStyles]} >
            <View style={styles.currentQuestionContainer}>
                <Text
                    style={styles.currentQuestionContainerText}
                    adjustsFontSizeToFit
                >Question</Text>
            </View>
            {options}
            </Animated.View>
        </View>
    );
}





  return (
    // <View style={styles.pressableContainer}>
    //   <Pressable style={imageZoom ? styles.quizZoomImage : styles.quizImage}
    //     onPress={() => setimageZoom(!imageZoom)}
    //   />
    //   <Text
    //     adjustsFontSizeToFit
    //     style={styles.quizQuestion}>{this.props}</Text>
    // </View>

    <View style={styles.quizScreenContainer}>
    {/* <Text> {totalDuration}</Text> */}
  <ScrollView style={styles.quizScreenScrollable}
      showsVerticalScrollIndicator={false}
  >
  
      < QuestionCreator currentQuestionObj={quiz[0]} />
      <View style = {styles.choiceContainerSpaceHolder} />
  </ScrollView>
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

export default Substance

const styles = StyleSheet.create({
  pressableContainer: {
    width: '90%',
    flexGrow: 1,
    backgroundColor: '#38ada9',
  },
  choiceContainerOutline: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    backgroundColor: '#3c6382',
    padding: 10,
  },
  choiceContainerSpaceHolder: {
    height: 100,
  },
  quizImage: {
    height: 200,
    width: 200,
    backgroundColor: 'aquamarine',
    alignSelf: 'center',
    marginTop: '3%',
  },
  quizZoomImage: {
    height: width * 0.89,
    width: width * 0.89,
    backgroundColor: 'aquamarine',
    alignSelf: 'center',
    marginTop: '3%',
  },
  quizQuestion: {
    width: '90%',
    marginTop: '5%',
    alignSelf: 'center',
    flexGrow: 1,
    fontSize: 20,
    backgroundColor: '#55efc4',
    padding: 10,
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
  width: width * 0.8,
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
})