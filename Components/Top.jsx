import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Top = ({currentQuestionNumber, setCurrentQuestionNumber}) => {

  // const currentQuestionNumberProp = currentQuestionNumber;
  // console.log( currentQuestionNumberProp);

  const currentQuestionNumberProp = 5;

  const GenerateButton = () => {
    const buttonContainer = [];
    
    for(let i=0;i<currentQuestionNumberProp;i++){
        buttonContainer.push(
            <Pressable style={ i== currentQuestionNumberProp ? styles.btCurrentIndividualGroup :styles.btIndividualGroup} 
            key={i}
            // onPress={() => setcurrentQuestion(i)}
            >
            <Text style={styles.btIndividualGroupText}
            adjustsFontSizeToFit
            >{i+1}</Text>
        </Pressable>
        );
    }
   
    return(
        <View style={styles.buttonGroup} >
            {buttonContainer}
        </View>
    )
   
}

  return (
//     <View>
//       <Text>Top</Text>
//       <Button
//   onPress={() => setCurrentQuestionNumber(currentQuestionNumber - 1)}
//   title="-"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
// />
// <Button
//   onPress={() => setCurrentQuestionNumber(currentQuestionNumber + 1)}
//   title="+"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
// />
//     </View>

 // Trial on Merge Process

  // <View style={styles.buttonGroup} >
  //       <View style={styles.btIndividualGroup} >
  //           <Text style={styles.btIndividualGroupText}
  //           adjustsFontSizeToFit
  //           >1</Text>
  //       </View>
  //       <View style={styles.btIndividualGroup} >
  //           <Text style={styles.btIndividualGroupText}
  //           adjustsFontSizeToFit
  //           >2</Text>
  //       </View>
  //       <View style={styles.btIndividualGroup} >
  //           <Text style={styles.btIndividualGroupText}
  //           adjustsFontSizeToFit
  //           >3</Text>
  //       </View>
     
     
  //       </View>

  GenerateButton()



  )
}

export default Top

const styles = StyleSheet.create({
  buttonGroup : {
      // width: 200,
      marginHorizontal : 30,
      marginVertical : 10,
      // height: 50,
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor: '#1dd1a1',
      alignItems :'center',
      justifyContent : 'center',
  },
  btIndividualGroup : {
      width : 30,
      height : 40 ,
      backgroundColor : '#01a3a4', 
      marginLeft : 10,
      marginTop: 10,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
  },
  btCurrentIndividualGroup : {
      width : 30,
      height : 40 ,
      backgroundColor : '#00b894', 
      marginLeft : 10,
      marginTop: 10,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
  },
  btIndividualGroupText : {
      fontSize: 25,
      color: '#c8d6e5',
  }
})