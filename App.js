import React,{Component} from "react";
import {} from "react-native"
import FlashMessage from "react-native-flash-message";
import Routes from "./src/Navigation/Routes";
export default class App extends Component{
  render(){
    return(
      <>
      <Routes/>
      <FlashMessage position="top"/>
      </>
    )
  }
}