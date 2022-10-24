import { useEffect } from 'react'
import { Button } from 'react-native'
import Tts from 'react-native-tts'
 
export default function ExpoSpeech({ language, text, onBoundary, onDone }) {
  const newLanguage = language || 'en-US';
  const title = `ExpoSpeech! - ${newLanguage}`;

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

  return <Button title={title}  onPress={() => Tts.speak(text, { language: newLanguage })} />;
}
