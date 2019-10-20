import React, { useEffect, useState } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'

const Card = ({poke, navigation}) => {

  const styles = StyleSheet.create({
    listChar: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      margin: 10
    }
  })

  const { width, height } = Dimensions.get('window')

  return (
    <View style={styles.listChar}>
      <TouchableOpacity onPress={() => navigation.navigate('Detail', poke)}>
        <Image 
          style={{ width: ((width-20)/3.2), height: 150, resizeMode: 'cover', borderRadius: 5}}
          source={{uri: poke.img}}
          >
        </Image> 
        <Text style={{textAlign: 'center', marginTop: 10, fontSize: 18, fontWeight: '600', color: 'rgba(0,0,0,0.8)'}}> { poke.name } </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card;
