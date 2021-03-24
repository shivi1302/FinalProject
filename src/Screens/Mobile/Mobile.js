import React, {Component} from 'react';
import {Text, View,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Validation from '../../uttils/Validation';
import WrapperClass from '../../Component/WrapperClass';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { loginUsingPhone } from '../../redux/actions/auth';
import Loader from '../../Component/Loader';
export default class Mobile extends Component{
    state={
        phone:"",
        isLoading:false
    }
    onChangeText(key) {
        return (value) => {
          this.setState({
            [key]: value,
          });
        };
      }

    isVaidPhone=()=>{
      let{phone} = this.state
      const error = Validation({
        phoneNumber : phone
      })
      if (error) {
        showMessage({
          type:'danger',
          icon:'danger',
          message:error,
        })
        return false;
      }
      return true;
    }


LoginUsingPhone =()=>{
let{isLoading}=this.state
if (this.isVaidPhone())
{
    loginUsingPhone( {"contactDetails":{"phoneNo": this.state.phone,
     "countryCode": "+91",
     "countryCodeISO": "IN"}
   }).then((res)=>{
     isLoading=true,
     console.log(res)
     this.props.navigation.navigate(navigationStrings.OTP,{data:res.data.userId})
   }).catch((error)=>{
     isLoading=false
   })
   this.setState({
     isLoading:true
   })
  }
 } 


render(){
    return(
        <View style={{flex:1}}>
        <Text style={styles.mainText}>Enter Mobile Number</Text>
        <TextInput
           placeholder="Mobile Number"
           style={styles.placeHolders}
           onChangeText={this.onChangeText("phone")}
           ></TextInput>
 <TouchableOpacity style={styles.button}  onPress={this.LoginUsingPhone}>
     <Text style={styles.buttonText}>Start</Text>
 </TouchableOpacity>
         <Text style={{textAlign:"center",marginTop:20}}>Don't have an account ?  
                 
         </Text>
         <TouchableOpacity onPress={()=>{this.signupLoader}}>
             <Text style={{color:colors.themeColor,textAlign:"center"}}>
                SignUp
             </Text>
             </TouchableOpacity> 
             <Loader isLoading={this.state.isLoading}/>
       </View>
    )
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