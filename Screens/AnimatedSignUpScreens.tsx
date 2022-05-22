import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'


interface PageProps  {
    title: string,
    index: number,
}

const {height, width} = Dimensions.get('window');


const AnimatedSignUpScreens: React.FC<PageProps> = ({title,index}) => {

    const colorStyles = {
        backgroundColor: `rgba(26, 188, 156, 0.${2*index+3})`,
    };

    
    return (
        <View style={[styles.container, colorStyles]}>
            <Text>{title}</Text>
        </View>
    )
}

export default AnimatedSignUpScreens

const styles = StyleSheet.create({
    container : {
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
