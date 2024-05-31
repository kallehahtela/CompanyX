import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { PropsWithChildren } from 'react';
import Markdown from 'react-native-markdown-display';

import Colors from '@/constants/Colors';

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior="automatic">
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: 'TE',
    color: Colors.dark_grey,
    marginTop: 15,
    marginBottom: 10,
    lineHeight: 40,
  },
  heading2: {
    fontFamily: 'TE',
    color: Colors.light_grey,
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    fontFamily: 'TE',
    lineHeight: 24,
  },
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default MarkdownDisplay;