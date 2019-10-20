import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Picker } from 'react-native'
import { fetchPokemon, fetchTypes } from '../stores/actions'
import ModalDropdown from 'react-native-modal-dropdown';

import Card from '../components/card'

const Home = (props) => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 27,
      paddingVertical: 15
    }
  })

  const dispatch = useDispatch()
  const data = useSelector(state => state)
  const [currentOffset, setCurrentOffset] = useState(0)
  const [loadingBottom,setLoadingBottom] = useState(false)
  const [searchKeyword, setSetSearchKeyword] = useState('')

  useEffect(() => {
    dispatch(fetchTypes())
    dispatch(fetchPokemon(currentOffset))
    setCurrentOffset(currentOffset + 20)
  }, [])

  const handleLoadMore = () => {
    dispatch(fetchPokemon(currentOffset))
    setCurrentOffset(currentOffset + 20)
    setLoadingBottom(true)
  }

  const handleOptions = (idx, value) => {
    console.log(value)
  }

  const displayedPokemon = (data.pokemons || [])
    .filter(pokemon => {
      if (searchKeyword != 'all') {
        for(let i=0; i<pokemon.types.length; i++) {
          return new RegExp(searchKeyword, 'i').test(pokemon.types[i].type.name)
        }
      } else return data.pokemons
      return true
    })

  return (
    <View style={styles.container}>
      <ModalDropdown 
        options={data.types}
        dropdownStyle={{width: '85%'}}
        onSelect={(idx, val) => setSetSearchKeyword(val)}
        defaultValue='Select your favorite here'
        textStyle={{fontSize: 15, fontWeight: '500', textAlign: 'center', color: 'rgba(0,0,0,0.8)'}}
      />
      <View style={{marginVertical: 15}}>
        <FlatList 
          data={displayedPokemon}
          keyExtractor={(item, index) => item.id.toString()}
          numColumns={2}
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToAlignment='center'
          onEndReachedThreshold={0.3}
          onEndReached={handleLoadMore}
          renderItem={({item}) => (
            <Card key={item.id} poke={item} navigation={props.navigation} />  
          )}
          ListFooterComponent={ loadingBottom ? <ActivityIndicator size="large" color="red"></ActivityIndicator> : <Text style={{textAlign:'center', fontSize: 15, marginHorizontal: 20}}></Text>}
        />
      </View>
    </View>
  )
}

Home.navigationOptions = () => ({
  title: 'Pokedex',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 25
  } 
})

export default Home;
