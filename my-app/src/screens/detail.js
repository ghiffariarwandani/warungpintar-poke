import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet ,View, Text, Image, Dimensions } from 'react-native'
import { fetchOnePokemon } from '../stores/actions'

const Detail = (props) => {
  
  const pokemon = props.navigation.state.params
  const { width, height } = Dimensions.get('screen')

  const styles = StyleSheet.create({
    aboutDesc: {
      fontSize: 13, 
      fontWeight: '500', 
      color: 'rgba(0,0,0,0.6)',
      marginBottom: 18,
    },
    typess: {
      borderRadius: 8,
      borderWidth: 1,
      backgroundColor: 'whitesmoke',
      borderColor: 'rgba(255, 255, 255, 0.4)',
      marginRight: 5,
      padding: 5,
      marginVertical: 10
    },
    about: {
      backgroundColor: 'white',
      flex: 1,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 30,
      shadowOpacity: 0.4, 
      shadowRadius: 5, 
      shadowColor: '#06967A'
    },
    header: {
      justifyContent: 'space-between', 
      flexDirection: 'row', 
      alignItems: 'flex-end', 
      paddingHorizontal: 27
    },
    aboutVal: {
      fontSize: 13, 
      fontWeight: '600', 
      color: 'rgba(0,0,0,0.8)',
      marginBottom: 18,
    }
  })


  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>{pokemon.name}</Text>
        <Text style={{fontWeight: 'bold'}}> #00{pokemon.id} </Text>
      </View>
      <View style={{flexDirection: 'row', flexWrap:'wrap', paddingHorizontal: 27}}>
        { pokemon.types.map((el, i) => {
          return (
            <View key={i} style={styles.typess}> 
              <Text> {el.type.name} </Text>
            </View>
          )
        }) }
      </View> 
      <Image
        style={{width: '70%', height: height/3, alignSelf: 'center', marginBottom: 30}}
        source={{uri: pokemon.img}}
      />
      <View style={styles.about}>
        <Text style={{textAlign: 'center',  fontSize: 18, fontWeight: '500', marginVertical: 30}}> About </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: width / 4}}>
            <Text style={styles.aboutDesc}> Species </Text>
            <Text style={styles.aboutDesc}> Weight </Text>
            <Text style={styles.aboutDesc}> Height </Text>
            <Text style={styles.aboutDesc}> Move </Text>
            <Text style={styles.aboutDesc}> Base Status </Text>
            <Text style={styles.aboutDesc}> Abilities </Text>
          </View>
          <View>
            <Text style={styles.aboutVal}> {pokemon.name} </Text>
            <Text style={styles.aboutVal}> {pokemon.weight} hectograms </Text>
            <Text style={styles.aboutVal}> {pokemon.height} decimetres </Text>
            <Text style={styles.aboutVal}> {pokemon.move} </Text>
            <Text style={styles.aboutVal}> {pokemon.base} </Text>
            <View>
              {pokemon.ability.map((el, i) => <Text key={i} style={styles.aboutVal}> { el.ability.name } </Text> )}
            </View>
          </View> 
      </View>
      </View>
    </View>
  )
}

export default Detail
