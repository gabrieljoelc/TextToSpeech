import React from 'react';
import { NativeModules, StyleSheet, TouchableHighlight, View } from 'react-native';
import { Text, useTextColor } from './Text';

export default function Starters() {
  const SwiftStarters = NativeModules.SwiftStarters;
  const { textColor } = useTextColor();

  function orderingStarters() {
    console.log('React Native Waitress: Starters order sent to Swift Kitchen...')
    const appetizers = {
      'First':'React Salad',
      'Second':'Native Bruchetta',
      'Last':'Swift Rolls',
    }
    SwiftStarters.sendAppetizersOrder(appetizers)
  }

  function getFirstAppetizer() {
    console.log('React Native Waitress: Is the first appetizer ready?')
    SwiftStarters.getFirstAppetizer((appetizer) => {
      console.log('Swift Cook: Yes, the', appetizer, 'is being sent!')
    });
  }

  function getSecondAppetizer() {
    console.log('React Native Waitress: Client is ready to get his second appetizer.')
    SwiftStarters.getSecondAppetizer((error) => {
      console.log('Swift Cook:', error.domain)
    });
  }

  function getLastAppetizer() {
    console.log('React Native Waitress: Can we offer a discount on last entry?')
    SwiftStarters.getLastAppetizer(true, (appetizer, discount) => {
      console.log('Swift Cook: We are happy to offer the', appetizer, 'for', discount, ':-)')
    }, (error) => {
      console.log('Swift Cook:', error.domain)
    });
  }

  return (
    <View style={[styles.container, { borderColor: textColor}]}>
      <TouchableHighlight onPress={orderingStarters}>
        <Text>Order Starters</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={getFirstAppetizer}>
        <Text>Get First Appetizer</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={getSecondAppetizer}>
        <Text>Get Second Appetizer</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={getLastAppetizer}>
        <Text>Get Last Appetizer</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 200,
    justifyContent: 'space-evenly',
  },
});
