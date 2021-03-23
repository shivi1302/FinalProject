import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';


import {otpTimerCounter} from '../../uttils/helperFunctions'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import WrapperClass from '../../Component/WrapperClass';
const CELL_COUNT = 4;
export default function OtpVerification({navigation}) {
  const [state, setState] = useState({
    timer: 100,
    otp: '',
  });

  const updateState = data => setState(state => ({...state, ...data}));
  //TO SHOW THE TIMER SO THAT USER HAS TO WAIT FOR A WHILE BEFORE REQUSTING A NEW OTP AND HE DON'T KEEP ON REQUESTING OTP AGAIN AND AGAIN
  useEffect(() => {
    let timerId;
    if (timer > 0) {
      timerId = setTimeout(() => {
        updateState({timer: timer - 1});
      }, 1000);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [state.timer]);

  //RESTING THE TIMER AND REQUEST FOR NEW OTP
  const _onResend = () => {
    updateState({timer: 120});
  };

  const onChangeOtp = otp => {
    updateState({otp});
  };
  //THIS ARE DEFAULT METHOD REQUIRED BY OTP MODULE TO WORK PROPERLY INCASE MOVE FROM ON BOX TO ANOTHER OR INCASE OF BLUR
  const ref = useBlurOnFulfill({otp: state.otp, cellCount: CELL_COUNT});
  const [propsOtp = props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: state.otp,
    setValue: onChangeOtp,
  });

  const onVerifyOtp = () => {
    const {otp} = state;
    alert(otp);
    navigation.navigate(navigationStrings.HOME);

  };

  const {timer} = state;
  return (
    <WrapperClass>
      <View style={styles.backContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
          style={{alignSelf: 'flex-start'}}>
          <Image style={{height:40,width:40}} source={imagePath.backArrow} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 14,
        }}>
        <Text style={styles.header}>OTP VERIFICATION</Text>
        <Text style={styles.txtSmall}>Enter the OTP sent to your registered email and phone number</Text>
        <View style={{height:50}} />
        <CodeField
          ref={ref}
          {...propsOtp}
          value={state.otp}
          onChangeText={onChangeOtp}
          cellCount={CELL_COUNT}
          rootStyle={styles.root}
          blurOnSubmit
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          selectionColor={colors.themeColor}
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <TouchableOpacity
          onPress={onVerifyOtp}
          Style={{marginTop: 10}}
          
        ><Text>
            Verify Account</Text></TouchableOpacity>
        {timer > 0 ? (
          <View style={styles.bottomContainer}>
            <Text style={{...styles.txtSmall, color: colors.buttonColor}}>
              Resend Code in 
              <Text
                style={{
                  color: colors.themeColor,
                  fontFamily:fonts.mainfont
                }}>
                {`${otpTimerCounter(timer)} min`}
              </Text>
            </Text>
          </View>
        ) : (
          <View style={styles.bottomContainer}>
            <Text style={{...styles.txtSmall, color: colors.buttonColor}}>
              Didn't Get OTP
              <Text
                onPress={_onResend}
                style={{
                  color: colors.themeColor,
                  fontFamily: fonts.mainfont,
                }}>
                {' '}
                RESEND CODE
              </Text>
            </Text>
          </View>
        )}
      </View>
    </WrapperClass>
  );
}

const styles = StyleSheet.create({
    backContainer:{
        height:80,
        paddingHorizontal:22,
        justifyContent: 'center',
      },
      header: {
        fontSize: 24,
        fontFamily: fonts.mainfont,
        textAlign: 'center',
      },
      txtSmall: {
        
        textAlign: 'center',
        fontFamily: fonts.subTitles,
      },
    
      root: {
        marginHorizontal: 16,
        marginVertical: 30,
        justifyContent: 'space-between',
      },
     
      title: {textAlign: 'center', fontSize: 30},
      codeFieldRoot: {marginTop: 20},
      cell: {
        width: 60,
        height: 60,
        fontFamily: fonts.subTitles,
        lineHeight:57,
        fontSize: 24,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "black",
        color: "black",
        textAlign: 'center',
        marginRight: 10,
      },
      focusCell: {
        borderColor: colors.themeColor,
      },
})