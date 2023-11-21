import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useState, useCallback, useMemo } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
const [email, setEmail] = useState('');

const handleNameChange = (text) => {
  setName(text);
};

const handleEmailChange = (text) => {
  setEmail(text);
};

  const incrementCounter = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  const memoizedImage = useMemo(
    () => <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
    style={{width: 100, height: 100}} />,
    []
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    title: {
      fontSize: 65,
      fontWeight: 'bold',
      color: 'royalblue',
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.container}>
            <Text></Text>

          <Text style={styles.title}>Eden's</Text>

      <Image source={{ uri: 'https://www.sixt.fr/magazine/wp-content/uploads//sites/3/2022/11/delageD12.jpg' }}  style={{width: 370, height: 127}}  />      
      <Text>Open up App.js to start working on your  eden!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
    <Text></Text>

    <Button title="Add 1" onPress={incrementCounter} />
    <Text></Text>

    {memoizedImage}
    <Text></Text>

    <Text>Counter: {counter}</Text>
    <StatusBar style="auto" />
    <Text></Text>

    <TextInput
      style={styles.input}
      placeholder="Name"
      value={name}
      onChangeText={handleNameChange}
    />
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={handleEmailChange}
    />
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
 
      <StatusBar style="auto" />
    </View>
  );
};

export default App;