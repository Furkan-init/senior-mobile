import React, { Component } from 'react';
import { Dimensions, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const { height, width } = Dimensions.get('window');
import { StackActions, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
const popAction = StackActions.pop(1);
const ICON_SIZE = height * 0.05;



const PdfViewerScreen = ({route,navigation}) => {
    const { link } = route.params;
  return (
    <View 
    style={styles.containerPdfViewerScreen}
    >
        <View style={styles.backContainerPdfViewerScreen} >
        <Pressable
          style={styles.depFirstLevelBackIcon}
            onPress={() => navigation.dispatch(popAction)}
            >
           <AntDesign name="arrowleft" size={ICON_SIZE} color="#1e3799" />
            </Pressable>
        </View>
        <WebView  style={styles.webWiewContainerPdfViewerScreen} 
        source={{ uri: link }}
        />
    </View>
  )
}

export default PdfViewerScreen

const styles = StyleSheet.create({
    containerPdfViewerScreen : {
        flex : 1,
        backgroundColor: 'aquamarine'
    },
    backContainerPdfViewerScreen : {
        width,
        position: 'absolute',
        height: height * 0.07,
        backgroundColor: '#212529',
        justifyContent: 'center',
        zIndex: 2,
    },
    depFirstLevelBackIcon : {
        zIndex: 2,
        position : 'absolute',
        marginLeft: '1%',
        backgroundColor: '#3c6382',
        borderRadius: 10,
    },
    webWiewContainerPdfViewerScreen : {
        width,
        height: height,
        backgroundColor: '#212529'
    }
})