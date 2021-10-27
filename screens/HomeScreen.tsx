import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/home/Header'
import PostFeed from '../components/home/PostFeed'
import StoriesFeed from '../components/home/StoriesFeed'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.smcontainer}>
                <Header/>   
                <ScrollView showsVerticalScrollIndicator={false}>
                    <StoriesFeed />
                    <PostFeed/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    smcontainer:{
        paddingHorizontal:30,
        paddingVertical:50,
    }
})
