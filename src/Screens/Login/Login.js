import React, {Component} from 'react';
import {Text, View,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import Validation from '../../Component/Validation';
import WrapperClass from '../../Component/WrapperClass';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

class Login extends Component {
    state={
        email:"",
        password:"",
    }
    onChangeText(key) {
        return (value) => {
          this.setState({
            [key]: value,
          });
        };
      }
      isValidData = () => {
        let {email, password} = this.state;
        const error = Validation({
          email: email,
          password: password,
        });
        if (error) {
          showMessage({
            type: 'danger',
            icon: 'danger',
            message: error,
          });
          return false;
        }
        return true;
      };

  render() {
    return (
      <WrapperClass>
       <Text style={styles.mainText}>Login</Text>
       <TextInput
          placeholder="Email"
          style={styles.placeHolders}
          onChangeText={this.onChangeText("password")}
          ></TextInput>
           <TextInput
          placeholder="Password"
          style={styles.placeHolders}
          onChangeText={this.onChangeText("password")}
          ></TextInput>
          {/* <TouchableOpacity style={styles.button}     
              >
              <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity> */}
<TouchableOpacity style={styles.button}  onPress={() =>{this.isValidData ()? (this.props.navigation.navigate(navigationStrings.HOME)):null   }     
              }>
    <Text style={styles.buttonText}>Start</Text>
</TouchableOpacity>
        
        
      </WrapperClass>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    navBar: {
        flexDirection: 'row',
        marginBottom:30
      },
      
      mainText: {
        fontSize: 20,
        margin: 20,
        fontFamily: fonts.subTitles,
        textAlign:'center'
      },
      placeHolders: {
        backgroundColor: colors.white,
        padding: 10,
        paddingLeft: 15,
        borderRadius: 10,
        margin: 10,
        color:"black"
      },
      button:{
        backgroundColor:colors.buttonColor,
        padding:10,
        borderRadius:10,
        marginHorizontal:40,
        marginVertical:10
      },
      buttonText:{
        fontFamily: fonts.subTitles,
        textAlign:'center',
        fontSize:17,
        color:"white"
      }
    })
export default Login;