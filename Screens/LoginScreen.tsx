import React, { useLayoutEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Dimensions, KeyboardAvoidingView, Modal, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { StackActions, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    SignUp: undefined;
    LeaderBoard: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

interface Values {
    email: string,
    password: string
}


const { height, width } = Dimensions.get('window');
const popAction = StackActions.pop(1);




const LoginScreen = ({ navigation }: Props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openModal, setopenModal] = useState(false);
   


    const handleLogin = () => {
        if (email == 'Average@gmail.com' && password == '123456') {
            return navigation.navigate('LeaderBoard', {userType : 'average'});
        }
        else if (email == 'Unsuccessful@gmail.com' && password == '123456') {
            return navigation.navigate('LeaderBoard', {userType : 'unsuccessful'});
        }
        else return setopenModal(true);
    }


    return (
        <View style={styles.mainLoginContainer}>
            <View style={styles.loginContainerLogo}>
                <Text>Logo</Text>
            </View>
            <KeyboardAvoidingView style={styles.loginContainerForm}>
                <TextInput
                    style={styles.loginContainerInput}
                    placeholder="Email"
                    selectionColor = '#4b7bec'
                    onChangeText={(value) => {
                        setEmail(value)
                    }}
                />
                <TextInput
                    style={styles.loginContainerInput}
                    placeholder="Password"
                    selectionColor = '#4b7bec'
                    secureTextEntry={true}
                    onChangeText={(value) => {
                        setPassword(value)
                    }}
                />

                <Pressable
                    onPress={() =>
                        handleLogin()
                    }
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? '#0fb9b1'
                                : '#4b7bec',
                               
                        },
                        styles.loginButton
                    ]}
                >
                    <Text>Login</Text>
                </Pressable>
            </KeyboardAvoidingView>
  
            <Modal
                animationType="slide"
                transparent={true}
                visible={openModal}
            >
                <View style={styles.completeRemark}>
                    <AntDesign name="warning" size={50} color="red" />
                    <Text style={styles.bottomNavigationModalText}>Email or Password is wrong</Text>
                    <View style={styles.bottomNavigationModalButtonContainer}>
                        <Pressable style={styles.bottomNavigationModalButton}
                            onPress={() => setopenModal(!openModal)}
                        >
                            <Text
                                style={{
                                    fontWeight: '600',
                                    color: 'white',
                                }}
                            >Try Again</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginButton: {
        height: 40,
        width: '30%',
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#18dcff',
    },
    mainLoginContainer: {
        flex: 1,
        backgroundColor: '#212529',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    loginContainerLogo: {
        width: width * 0.7,
        height: height * 0.3,
        backgroundColor: '#4b7bec',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainerForm: {
        width: '80%',
        height: height * 0.3,
        // backgroundColor: 'blue',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    loginContainerSignup: {
        width: '80%',
        height: '13%',
        backgroundColor: '#eccc68',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    loginContainerInput: {
        width: '85%',
        height: '22%',
        backgroundColor: 'white',
        color: '#18dcff',
        borderRadius: 10,
        margin: 10,
        padding: 15,
    },
    loginContainerRememberMe: {
        width: '100%',
        height: '15%',
        backgroundColor: '#70a1ff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loginContainerRememberMeText: {
        fontSize: 11,
    },
    completeRemark: {
        position: 'absolute',
        height: height * 0.3,
        width: width * 0.7,
        backgroundColor: '#4b7bec',
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
        justifyContent: 'center',
    },
    bottomNavigationModalText: {
        padding: 20,
        fontSize: 22,
        // fontWeight: '600'
        color: 'white',
    },
    bottomNavigationModalButton: {
        backgroundColor: 'red',
        height: height * 0.06,
        padding: height * 0.01,
        borderRadius: 8,
        justifyContent: 'center',
    },


})
