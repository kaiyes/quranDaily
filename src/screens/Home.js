import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native'

export default class Home extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <View style={styles.ViewContainer}>
              <Text
                onPress={function goToDuas() {
                  navigate('Dua')
                }}
              >
                Home
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white'
  }
})
