import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text style={{textAlign:"center", fontSize:30,marginTop:"20%"}}>HomeScreen</Text>
      <TouchableOpacity 
        style={{backgroundColor:"orange",padding:10,marginTop:"20%",width:"50%",alignSelf:"center",borderRadius:10}}
        onPress={() => navigation.navigate("Stack")}
      >
        <Text style={{fontSize:15,textAlign:"center",color:"white"}}>Go to stack screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HomeScreen 

const styles = StyleSheet.create({})