import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {FontAwesome,Entypo, MaterialIcons} from '@expo/vector-icons'

const Footer = () => {
    return (
        <View style={{flexDirection: 'row' ,justifyContent:"space-between",alignItems:"center" ,marginTop:10}}>
            <View style={{flexDirection: 'row'}}>
                <View>
                    <TouchableOpacity>
                        <FontAwesome size={18} name="comment"/>
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft:10}}>
                    <TouchableOpacity>
                        <Entypo name="heart" size={20} />
                    </TouchableOpacity>
                </View>
                <View  style={{marginLeft:10}}>
                    <TouchableOpacity>
                        <MaterialIcons name="send" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity>
                   <Entypo name="bookmark" size={20}/>
            
            </TouchableOpacity>
            
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({})
