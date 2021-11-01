import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ProfleImage from '../ProfleImage'
import Footer from './Footer'


const Post = ({post}) => {
    return (
        <View style={styles.container}>
           <View style={styles.upcontainer}>
               <View style={{
                   flexDirection:'row'
               }}>
                    <ProfleImage img={post.user.image} size={40}/>
                    <View style={styles.info}>
                        <Text style={styles.name}>{post.user.name}</Text>
                        <Text style={styles.username}>{`@${post.user.username}`}</Text>
                    </View>
               </View>
               <TouchableOpacity>
                    <MaterialCommunityIcons  name="dots-vertical" size={28}/>
               </TouchableOpacity>
            </View>
            <View style={{marginVertical:5}}>
                <Text style={styles.content}>{post.content}</Text>
            </View>
            {!!post.img && (<Image source={{uri:post.img}} style={styles.img}/> )}

            <Footer/>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        marginVertical:10,
        backgroundColor:"white",
        paddingVertical:20,
        paddingHorizontal:10,
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    upcontainer: {
        flexDirection:"row",
        alignItems: 'center',
        justifyContent:'space-between'
    },
    info:{
        marginLeft:10
    },
    name:{
        fontSize:20,
        fontWeight:'bold'
    },
    username: {
        fontSize:14
    },
    content: {
        fontSize:17,
        fontWeight:'bold'
    },
    img:{
        width:"100%",
        height: 200,
        borderRadius:15
    }
})
