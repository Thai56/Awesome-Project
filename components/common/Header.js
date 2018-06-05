import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Header({ text }) {
  return (
    <Text style={styles.mainHeader}>
      {text} 
    </Text>
  );
}

const styles = StyleSheet.create({
  mainHeader: {
    fontSize: 50,
    fontWeight: '900',
    textAlign: 'center',
  },
})
