import React from 'react';
import { NativeModules, StyleSheet, TouchableHighlight, View } from 'react-native';
import { Text, useTextColor } from './Text';

export default function Reservation() {
  const SwiftReservation = NativeModules.SwiftReservation;
  const { restaurantName, phoneNumber } = SwiftReservation.getConstants();
  const { textColor } = useTextColor();

  function makeReservation() {
    console.log('React Native Client: Making a reservation...')
    const numberOfPeople = 1;
    const currentDate = new Date()
    const reservationInOneHour = new Date(new Date(currentDate).setHours(currentDate.getHours() + 1));
    SwiftReservation.makeReservation(numberOfPeople, reservationInOneHour.toDateString());
  }

  return (
    <View style={[styles.container, { borderColor: textColor}]}>
      <Text>{restaurantName}  #{phoneNumber}</Text>
      <TouchableHighlight onPress={makeReservation}>
        <Text>Make A Reservation</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 100,
    justifyContent: 'space-evenly',
  },
});
