import React from 'react'
import { Button } from 'react-native'
import * as Speech from 'expo-speech'
 
export default function ExpoSpeech() {
  return <Button title="ExpoSpeech!" onPress={() => Speech.speak('Hello World!')} />;
}
