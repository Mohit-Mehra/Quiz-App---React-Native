import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import Banner from "../assets/Banner.png"

const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.bannerConatiner}>
        <Image source={Banner} 
        style={styles.banner}
        resizeMode="contain" />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  banner:{
    height:300,
    width:300,
  },
  bannerConatiner:{
    justifyContent:'center',
    alignItems:'center',
  }
})