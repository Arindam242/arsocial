import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Story = ({story}) => {
    return (
        <Image
            resizeMode="cover"
        style={{
            width:70,
            height:70,
            borderRadius:15,
            marginHorizontal:10,
            marginVertical:20,
        }}  source={{uri:story.img}}/>
    )
}

export default Story


