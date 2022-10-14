import React from 'react'
import { Button } from 'react-native'
import Tts from 'react-native-tts'
 
export default function ExpoSpeech({ language, text }) {
  const newLanguage = language || 'en-US';
  const title = `ExpoSpeech! - ${newLanguage}`;
  const newText = text || 'Hello World!';
  return <Button title={title}  onPress={() => Tts.speak(newText, { language: newLanguage })} />;
}
