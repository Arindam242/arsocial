import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Post from './Post'
import posts from '../../data/posts'
import StoriesFeed from './StoriesFeed'

const PostFeed = () => {
    return (
        <FlatList 
            ListHeaderComponent={StoriesFeed}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={posts}
            renderItem={({item}) =><Post post={item}/> }
        />
    )
}

export default PostFeed

const styles = StyleSheet.create({})
