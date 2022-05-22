import React, { useState } from 'react'
import { Button, Dimensions, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';

const { height, width } = Dimensions.get('window');




const createVideoView = ({chosenVideo} : any) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    // const ch= chosenVideo;
  
    return(
        <View style={styles.restVideoUpper}>
        <Video
            ref={video}
            style={styles.video}
            source={{
                uri: chosenVideo.videoPath,
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={styles.buttons}>
            <Button
                title={status.isPlaying ? 'Pause' : 'Play'}
                onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }
            />
        </View>
        </View>

    );
}


const VideoScreen = ({ route }: any) => {
    const { currentVideo, restVideo } = route.params;
    const [chosenVideo, setchosenVideo] = useState(currentVideo);


    const RestVideoItem = (({item} : any) => {

        
        return (

             item.videoId === chosenVideo.videoId?   <View style={styles.restVideoContainer}
            >
                <View style={styles.restVideoPreview} />
                <View style={styles.restVideoInfo}>
                    <Text style={styles.restVideoHeader}>{item.videoName}</Text>
                    <Text style={styles.restVideoInstructor}>Instructor</Text>
                    <Text>Watching...</Text>
                </View>
                <View style={styles.restVideoCircularBar} />
            </View> :  <Pressable style={styles.restVideoContainer}
            onPress={() => setchosenVideo(item)}
            >
                <View style={styles.restVideoPreview} />
                <View style={styles.restVideoInfo}>
                    <Text style={styles.restVideoHeader}>{item.videoName}</Text>
                    <Text style={styles.restVideoInstructor}>Instructor</Text>
                </View>
                <View style={styles.restVideoCircularBar} />
            </Pressable>
          
        );
    });
   
    const renderRestVideo = ({item} : any) => (
        <RestVideoItem item={item}/>
    )

    console.log(chosenVideo);
        // Video componentinin funtionını yazıp sadece state degistirerek performansı düsürmemek hedef
        // asgidaki flatlist islemek icin function yine performans bakmak lazim
    return (
        <View>
            <Text>{chosenVideo.videoName}</Text>
            {createVideoView({chosenVideo})}
            <View style={styles.restVideoLower}>
            <FlatList
                data={restVideo}
                renderItem={renderRestVideo}
                keyExtractor={item => item.videoId}
            />
            </View>
        </View>
    )
}

export default VideoScreen

const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: 350,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    restVideoContainer: {
        backgroundColor: '#B33771',
        height: 120,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    restVideoPreview: {
        backgroundColor: 'grey',
        height: 100,
        width: 100,
        marginLeft: 10,
        borderRadius: 10,
    },
    restVideoInfo: {
        backgroundColor: '#FD7272',
        height: 80,
        paddingLeft: 20,
        justifyContent: 'space-around'
    },
    restVideoHeader: {
        fontSize: 25,
    },
    restVideoInstructor: {
        fontSize: 22,
    },
    restVideoCircularBar: {
        height: 50,
        width: 50,
        backgroundColor: '#F97F51',
    },
    restVideoLower : {
        height : 0.529*height,
    },
    restVideoUpper : {
    //    backgroundColor : 'yellow',
       height : 0.31*height,
    }
})
