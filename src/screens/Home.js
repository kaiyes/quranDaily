import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'

function Home({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.root}>
        <TouchableOpacity
          onPress={function gotoDua() {
            navigation.navigate('Dua')
          }}
        >
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold'
  }
})

export default Home
