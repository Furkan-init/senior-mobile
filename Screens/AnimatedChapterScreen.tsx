import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';


import chapterData from '../Components/ChapterData';

const { height, width } = Dimensions.get('window');

const AnimatedChapterScreen = ({ route }: any) => {
    const { item } = route.params;

    const Chapter = ({item,index} : any) => {
        return(
        <Animatable.View
        animation={'zoomIn'}
        duration={700}
        delay={400 + index * 100}
        style={styles.animatedChapterItemContainer}

        >
            <Image 
            style={styles.animatedChapterItemImage}
            source={{ uri: item.coverImage }} 
            />
            <Text style={styles.animatedChapterItemName}>{item.chapterName}</Text>
        </Animatable.View>)
    }

    const renderChapter = ({item, index} : any) => {
        return(
            <Chapter item = {item}index = {index} />
        )
    }

    return (
        <View style={styles.animatedChapterContainer}>
            <Image
                style={styles.animatedChapterImage}
                source={{ uri: item.coverImage }} />
            <Text style={styles.animatedChapterCourseName}>{item.name}</Text>
            <FlatList
            horizontal
        data={chapterData}
        renderItem={renderChapter}
        keyExtractor={item => item.chapterId}
      />
        </View>
    );
};

export default AnimatedChapterScreen;

const styles = StyleSheet.create({
    animatedChapterContainer: {
        flex: 1,
        backgroundColor: 'aquamarine',
    },
    animatedChapterImage : {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        resizeMode: 'cover',
    },
    animatedChapterCourseName : {
        position: 'absolute',
        top : height * 0.2,
        fontSize: 35,
        left: 20,
        color : 'white',
        fontWeight: '800',
    },
    animatedChapterItemContainer : {
        height : width * 0.5,
        width :  width * 0.4,
        top : height * 0.3,
        backgroundColor : 'aquamarine',
        margin : 8
    },
    animatedChapterItemImage : {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        resizeMode: 'cover',
    },
    animatedChapterItemName : {
        fontSize: 25,
        color: 'white',
        fontWeight: '600',
        width: '80%',
        position: 'absolute',
        top: '10%',
        left: 20,
    },
    
    
    
});
