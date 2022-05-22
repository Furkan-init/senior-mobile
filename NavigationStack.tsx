import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import DepartmentScreen from './Screens/DepartmentScreen';
import DepartmentDetailScreen from './Screens/DepartmentDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomDrawer from './Components/CustomDrawer';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import HomeScreen from './Screens/HomeScreen';
import NotificationScreen from './Screens/NotificationScreen';
import { FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';
import EventScreen from './Screens/EventScreen';
import QuizScreen from './Screens/QuizScreen';
import AnimatedChapter2 from './Screens/AnimatedChapter2';
import AnimatedChapterFollowUp from './Screens/AnimatedChapterFollowUp';
import DepartmentFirstLevel from './Screens/DepartmentFirstLevel';
import VideoPlayerScreen from './Screens/VideoPlayerScreen';
import PdfViewerScreen from './Screens/PdfViewerScreen';
import FormScreen from './Screens/FormScreen';



const NavigationStack = () => {
    const Drawer = createDrawerNavigator();
    // const Stack = createNativeStackNavigator();
    const Stack = createSharedElementStackNavigator();


    // const hasLoggedIn: boolean = false;

    function CourseTab() {
        return (
            <Stack.Navigator
                screenOptions={
                    {
                        headerShown: false,
                        headerTransparent: true
                    }}
            >
                <Stack.Screen name="Departments" component={DepartmentScreen} />
                <Stack.Screen name="Department First Level" component={DepartmentFirstLevel} />
                <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
                <Stack.Screen name="PdfViewer" component={PdfViewerScreen} />
            </Stack.Navigator>


        );
    }

    function EventTab() {
        return (
            <Stack.Navigator
            screenOptions={
                {
                    headerShown: false,
                    headerTransparent: true
                }}
            >
                <Stack.Screen name="Event" component={EventScreen} />
                <Stack.Screen name="Form" component={FormScreen} />
            </Stack.Navigator>


        );
    }

    function AnimatedChapter() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Courses" component={AnimatedChapter2} />
                <Stack.Screen name="Courses2" component={AnimatedChapterFollowUp} />
            </Stack.Navigator>
        );
    }

    function LeaderBoard() {
        return (
            <Stack.Navigator
                screenOptions={
                    {
                        headerShown: false,
                        headerTransparent: true
                    }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="LeaderBoard" component={HomeScreen} />
                <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
                <Stack.Screen name="PdfViewer" component={PdfViewerScreen} />
            </Stack.Navigator>
        );
    }

    return (

        <>
            <Drawer.Navigator
                drawerContent={props => <CustomDrawer {...props} />}
                screenOptions={{
                    drawerActiveBackgroundColor: '#4a69bd',
                    drawerActiveTintColor: 'white',
                    drawerInactiveTintColor: '#576574',
                }}
            >
                <Drawer.Screen name="Home" component={LeaderBoard}
                    options={{
                        drawerIcon: () => <FontAwesome5 name="home" size={24} color="#b2bec3" />
                    }}
                />
                <Drawer.Screen name="Courses" component={CourseTab}
                    options={{
                        drawerIcon: () => <Entypo name="book" size={24} color="#b2bec3" />
                    }}
                />
                <Drawer.Screen name="Events" component={EventTab}
                    options={{
                        drawerIcon: () => <Ionicons name="calendar" size={24} color="#b2bec3" />
                    }}
                />
            </Drawer.Navigator>
        </>


    )
}

export default NavigationStack

const styles = StyleSheet.create({})


