import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
    useDrawerProgress,
} from '@react-navigation/drawer';
import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, Dimensions} from 'react-native';
import user from './user.json';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { StackActions, useNavigation } from '@react-navigation/native';


const { height, width } = Dimensions.get('window');

const CustomDrawer = (props: any) => {
    
    return (
        <View style={styles.drawerMainContainer}> 
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#212529'}} >
        <View style={styles.userContainer}>
        <Image
        style={styles.userPicture}
        source={{
          uri: 'https://randomuser.me/api/portraits/men/1.jpg',
        }}
      />
        <Text  style={styles.userContainerText}>{user.results[0].name.first} {user.results[0].name.last}</Text>
        <View style={{flexDirection: 'row',marginBottom: 5}}>
        <FontAwesome name="first-order" size={24} color="#18dcff"  style={{margin: 10}} />
        <FontAwesome5 name="first-order-alt" size={24} color="#18dcff" style={{margin: 10}} />
        </View>
        </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    drawerMainContainer : {
       flex: 1,
        backgroundColor: '#212529',
    },
    userPicture : {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 15,
    },
    userContainer: {
       backgroundColor: '#212529',
       alignItems: 'center',
    },
    userContainerText : {
        fontSize: 22,
        fontWeight: '600',
        color: '#18dcff',
    },
    logoutButton : {
        width: 80,
        height: 30,
        marginBottom: 40,
        marginLeft: 100,
        // backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
