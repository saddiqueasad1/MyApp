import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
// import TodoList from '../components/TodoList';

const HomeScreen = ({navigation}) => {
  const [inputDate, setInputDate] = useState<string>('');

  return (
    <View style={styles.container}>
      {/* <TodoList /> */}

      <Text>passing data between screens.</Text>

      <TextInput
        style={styles.input}
        value={inputDate}
        onChangeText={setInputDate}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailsScreen', {data: inputDate})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    width: '70%'
  },
});

export default HomeScreen;
