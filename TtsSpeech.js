import { useEffect, useState } from 'react'
import { Button } from 'react-native'
import Tts from 'react-native-tts'
 
export default function ExpoSpeech({ language, text, onBoundary, onDone }) {
  const [speechState, setSpeechState] = useState('notStarted');
  const newLanguage = language || 'en-US';
  const title = `RN TTS! - ${newLanguage}`;

  function handlePress() {
    if (speechState == 'notStarted') {
      Tts.speak(text, { language: newLanguage, quality: 500, androidParams: { KEY_PARAM_UTTERANCE_ID: 'es-US-language' } })
      setSpeechState('playing');
    }
    else if (speechState == 'playing') {
      Tts.stop();
      setSpeechState('notStarted');
      onDone();
    }
  }

  useEffect(() => {
    Tts.voices().then(voices => console.log(voices.filter(voice => voice.notInstalled == false).map(voice => voice.id)));
  }, []);

  useEffect(() => {
    // progress {"end": 5, "frame": 120, "start": 0, "utteranceId": "-969099747"
    if (onBoundary) {
      // not sure how to unsubscribe since these retur
      Tts.addEventListener('tts-progress', (event) => {
        //console.log("progress", event);
        onBoundary({ charIndex: event.start, charLength: event.end });
      });
    }

    if (onDone) {
      Tts.addEventListener('tts-finish', (event) => {
        console.log("finish", event);
        onDone(event);
      });
    }

    return () => {
      if (onBoundary) {
        Tts.removeEventListener('tts-progress');
      }
      if (onDone) {
        Tts.removeEventListener('tts-finish');
      }
    };
  }, [text]);

  return <Button title={title}  onPress={handlePress} />;
}
