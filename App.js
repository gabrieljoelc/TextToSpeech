/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ExpoSpeech from './ExpoSpeech';
import TtsSpeech from './TtsSpeech';
import Reservation from './Reservation';
import Starters from './Starters';
import { Text } from './Text';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const helloWorldEnglish = 'In the end, this shadow is but a small and passing thing. There is light and high beauty forever beyond its reach. Find the light, and the shadow will not find you.';
const helloWorldSpanish = 'Al final, esta sombra no es más que una cosa pequeña y pasajera. Hay luz y gran belleza para siempre más allá de su alcance. Encuentra la luz, y la sombra no te encontrará.';
function splitText(text, from, to) {
  return [
    text.slice(0, from),
    text.slice(from, to),
    text.slice(to)
  ];
}

function HighlightedText({ text, from, to }) {
  const [start, highlight, finish] = splitText(text, from, to);
  return (
    <Text style={{ marginVertical: 15 }}>
      {start}
      <Text style={{ backgroundColor: "yellow" }}>{highlight}</Text>
      {finish}
    </Text>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [highlightSection, setHighlightSection] = useState({
    from: 0,
    to: 0
  });
  const [highlightSectionSpanish, setHighlightSectionSpanish] = useState({
    from: 0,
    to: 0
  });
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function handleBoundaryEnglish({ charIndex, charLength }) {
    console.log('boundaryHandlerEnglish', { charIndex, charLength });
    setHighlightSection({ from: charIndex, to: charIndex + charLength });
  }

  function handleDoneEnglish() {
    setHighlightSection({ from: 0, to: 0 });
  }

  function handleBoundarySpanish({ charIndex, charLength }) {
    console.log('boundaryHandlerSpanish', { charIndex, charLength });
    setHighlightSectionSpanish({ from: charIndex, to: charIndex + charLength });
  }

  function handleDoneSpanish() {
    setHighlightSectionSpanish({ from: 0, to: 0 });
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={{fontSize: 28}}>Text to read and highlight</Text>
          <HighlightedText text={helloWorldEnglish} {...highlightSection} />
          <HighlightedText text={helloWorldSpanish} {...highlightSectionSpanish} />

          <Text style={{fontSize: 28}}>expo-speech</Text>
          <ExpoSpeech text={helloWorldEnglish} onBoundary={handleBoundaryEnglish} />
          <ExpoSpeech language='es-419' text={helloWorldSpanish} />
          <Text style={{marginTop: 15, fontSize: 28}}>react-native-tts</Text>
          <TtsSpeech text={helloWorldEnglish} onBoundary={handleBoundaryEnglish} onDone={handleDoneEnglish} />
          <TtsSpeech language='es-419' text={helloWorldSpanish} onBoundary={handleBoundarySpanish} onDone={handleDoneSpanish} />

          <Reservation />
          <Starters />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
