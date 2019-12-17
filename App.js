import React, { Component } from "react"
import { NavigationNativeContainer } from "@react-navigation/native"

import Navigator from "./src/Navigation"

export default class App extends Component {
  render() {
    return (
      <NavigationNativeContainer>
        <Navigator />
      </NavigationNativeContainer>
    )
  }
}
