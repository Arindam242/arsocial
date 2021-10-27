import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import stories from '../../data/stories'
import Story from './Story'

const StoriesFeed = () => {
    return (
        <FlatList
            horizontal
            data={stories}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=> <Story story={item}/>}
        />
    )
}

export default StoriesFeed

