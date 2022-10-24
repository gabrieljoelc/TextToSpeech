import { useEffect, useState } from 'react'
import { Button, Platform } from 'react-native'
import * as Speech from 'expo-speech'
 
export default function ExpoSpeech({ language, text, onBoundary, rest }) {
  const [speechState, setSpeechState] = useState('notStarted');
  const newLanguage = language || 'en-US';
  const title = `ExpoSpeech! - ${newLanguage}`;
  const newText = text || 'Hello World!';

  function innerBoundary(ev) {
    console.log('innerBoundary', { ev, onBoundary });
    if (!onBoundary) return;
    onBoundary(ev, newText);
  }

  function onStart() {
    console.log('onStart');
  }

  function onError(e) {
    console.log('onError', e);
  }

  function onDone() {
    console.log('onStart');
  }

  function handlePress() {
    if (speechState == 'notStarted') {
      Speech.speak(newText, { language: newLanguage, onBoundary: e => console.log('onBoundary', e), onStart, onDone, onError, ...rest });
      setSpeechState('playing');
    }
    else if (speechState == 'playing') {
      if (Platform.OS === 'android') {
        Speech.stop();
        setSpeechState('notStarted');
      }
      else {
        Speech.pause();
        setSpeechState('paused');
      }
    }
    else if (speechState == 'paused') {
      Speech.resume();
      setSpeechState('playing');
    }
  }

  //useEffect(() => {
  //  console.log('ExpoSpeech', onBoundary);
  //  const utt = new SpeechSynthesisUtterance(text);
  //  return utt.addEventListener('boundary', innerBoundary);
  //}, [text]);

  return <Button title={title}  onPress={handlePress} />;
}
