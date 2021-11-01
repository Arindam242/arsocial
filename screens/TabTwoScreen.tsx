import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import {Auth} from 'aws-amplify'

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log out Screen</Text>
     <TouchableOpacity onPress={()=>Auth.signOut()} style={styles.btn}>
        <Text>Log out</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btn:{
    paddingHorizontal:30,
    marginTop: 15,
    paddingVertical:10,
    borderWidth:1,
    borderRadius:10,
  }
});
