import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Feather} from '@expo/vector-icons'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Soc<Text style={styles.sptext}>ial</Text></Text>
            <TouchableOpacity style={styles.search}>
                <Feather name="search"  size={28}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        letterSpacing:1
    },
    search: {
        backgroundColor:"#fff",
        width:50 ,
        height: 40,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    sptext:{
        color: "#7572F3",
    }
})
