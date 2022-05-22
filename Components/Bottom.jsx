import React, { useState } from 'react'
import { 
  Alert, 
  Dimensions, 
  Modal, 
  Pressable, 
  StatusBar,
  Button, 
  StyleSheet, 
  Text, 
  View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { StackActions, useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const Bottom = ({currentQuestionNumber, setCurrentQuestionNumber}) => {

  // const currentQuestionNumberProp = currentQuestionNumber;
  // console.log( currentQuestionNumberProp);

  // Copied directly needed control
  const [openModal, setopenModal] = useState(false);
  const popAction = StackActions.pop(1);
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNavigationContainer}>
            <View style={styles.bottomNavigationArrowGroup}>
                <Pressable style={styles.bnArrow}
                    // disabled={currentQuestion <= 0}
                    // onPress={() => setcurrentQuestion(currentQuestion - 1)}
                >
                    <Ionicons name="ios-arrow-back-outline" size={24} color="#c8d6e5" />
                </Pressable>
                <Pressable style={styles.bnArrow}
                    // disabled={currentQuestion >= questionNumber - 1}
                    // onPress={() => setcurrentQuestion(currentQuestion + 1)}
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

export default Bottom

const styles = StyleSheet.create({
  bottomNavigationContainer: {
      //marginHorizontal : 30,
      //marginVertical : 10,
      left: 30,
      right: 30,
      bottom: 30,
      position: 'absolute',
      flexDirection: 'row',
      backgroundColor: '#1dd1a1',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  bottomNavigationArrowGroup: {
      //backgroundColor :'aquamarine',
      flexDirection: 'row',
  },
  bnArrow: {
      width: 40,
      height: 50,
      backgroundColor: '#01a3a4',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
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
      opacity : 0.95,
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
  bottomNavigationModalButtonContainer : {
      flexDirection :'row',
      width : '90%',
      justifyContent : 'space-between',
  },
  bottomNavigationModalButton : {
      justifyContent : 'center',
     backgroundColor : '#c8d6e5',
     height : 50,
     borderRadius: 8,
     padding : 15,
  },
  bottomNavigationModalText: {
      padding : 20,
      fontSize: 22,
  }
})