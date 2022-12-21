import React from 'react';
import { Text as RNText } from 'react-native';
import { useColorScheme } from 'react-native';

export function useTextColor() {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? 'white' : 'black';
  return { textColor };
}

export function Text({ children, style, ...rest }) {
  const { textColor } = useTextColor();

  return (
    <RNText {...rest} style={{ ...style, color: textColor }}>{children}</RNText>
  );
}
