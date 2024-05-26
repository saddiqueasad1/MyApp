import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailsScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>{route.params?.data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
