import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import colors from '../styles/colors';
const WrapperClass = ({
  children,
  bgColor = colors.themeColor,
  statusBarColor = colors.themeColor,
  barStyle = 'light-content',
}) => {
  return (
    <SafeAreaView >
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View >
        {children}
      </View>
    </SafeAreaView>
  );
};
export default WrapperClass;
