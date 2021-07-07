import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: '#4B088A',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

// eslint-disable-next-line no-undef
export default KeyWordButton = ({text}) => {
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
