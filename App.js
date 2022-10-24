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
  Text,
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
    <Text>
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
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function boundaryHandlerEnglish({ charIndex, charLength }) {
    console.log('boundaryHandlerEnglish', charIndex);
    setHighlightSection({ from: charIndex, to: charIndex + charLength });
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
          <Text>expo-speech</Text>
          <HighlightedText text={helloWorldEnglish} {...highlightSection} />
          <ExpoSpeech text={helloWorldEnglish} onBoundary={boundaryHandlerEnglish} />
          <ExpoSpeech language='es-419' text={helloWorldSpanish} />
          <Text>react-native-tts</Text>
          <TtsSpeech />
          <TtsSpeech language='es-419' text='Hola Mundo' />
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
