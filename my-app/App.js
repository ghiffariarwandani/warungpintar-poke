import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Provider } from 'react-redux'

import store from './src/stores'
import Navigation from './src/navigation'

const images = [
  require('./assets/images/icons8-left-100.png'),

]

class App extends Component {

  state = {
    isLoading: false
  }

  handleResources = async () => {
    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync()
    })
    return Promise.all(cacheImages)
  }

  render() {

    if (!this.state.isLoading && !this.props.skipLoadingScreen) {
      return (
        <AppLoading 
          startAsync={this.handleResources}
          onError={console.ward}
          onFinish={() => this.setState({ isLoading: true })}
        />
      )
    }

    return (
      <Provider store={store}>
       <Navigation />
      </Provider>
    )
  }
}

export default App
