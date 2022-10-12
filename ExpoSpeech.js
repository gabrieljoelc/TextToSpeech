import React from 'react'
import { Button } from 'react-native'
import * as Speech from 'expo-speech'
 
export default function ExpoSpeech({ language, text }) {
  const newLanguage = language || 'en-US';
  const title = `ExpoSpeech! - ${newLanguage}`;
  const newText = text || 'Hello World!';
  return <Button title={title}  onPress={() => Speech.speak(newText, { language: newLanguage })} />;
}
