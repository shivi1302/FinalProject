import React, {Component} from 'react';
import {Text, View,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Validation from '../../uttils/Validation';
import WrapperClass from '../../Component/WrapperClass';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import api from "../../apis"
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
      loginLoader = () => {
        let {email, password} = this.state;
        if (this.isValidData()) {
          api.Login({
              email: email,
              password: password,
            })
            .then((res) => {
              console.log(JSON.stringify(res));
              
              showMessage({
                type: 'success',
                icon: 'success',
                message: 'Done',
              });
              setUserData(res.data).then(
                this.props.navigation.navigate(navigationStrings.HOMEPAGE),
              );
            })
            .catch((error) => {
              console.log(error+"HGFDHGSHFH");
              showMessage({
                type: 'danger',
                icon: 'danger',
                message: error,
              });
              return false;
            });
        }
      }; 
      
      signupLoader = () => {
        
        api.SignUp({
            email: "shivink1331@gmail.com",
            password: "1234567",
            name:"Shivi"
          })
          .then((res) => {
            console.log(JSON.stringify(res));
          })
          .catch((error) => {
            console.log(error+"HGFDHGSHFH");
          });
      
    };
  render() {
    return (
      <WrapperClass>
       <Text style={styles.mainText}>Login</Text>
       <TextInput
          placeholder="Email"
          style={styles.placeHolders}
          onChangeText={this.onChangeText("email")}
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
<TouchableOpacity style={styles.button}  onPress={() =>{this.isValidData()? (this.props.navigation.navigate(navigationStrings.HOMEPAGE)):null   }
              }>
    <Text style={styles.buttonText}>Start</Text>
</TouchableOpacity>
        <Text style={{textAlign:"center",marginTop:20}}>Don't have an account ?  
                
        </Text>
        <TouchableOpacity onPress={()=>{this.signupLoader}}>
            <Text style={{color:colors.themeColor,textAlign:"center"}}>
               SignUp
            </Text>
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
        backgroundColor:colors.themeColor,
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
