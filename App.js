import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import Blink from './src/effects/blink';
export default function App() {
  const [input, setInput] = useState(0);
  useEffect(() => { setInput(0); console.log(input); }, [])

  return (

    <View style={styles.bg}>
      <View style={styles.container1}>

        <Blink text="Count with me!" />
        <View style={styles.container2}>
          <Text style={{ color: 'cyan', fontSize: 40, fontFamily: 'serif', fontWeight: 'bold', margin: '5%', alignSelf: 'center' }}>COUNTER</Text>
          <View>
            <Text style={{ fontSize: 125, color: 'white', margin: '5%', alignSelf: 'center' }}>{String(input)}</Text>
          </View>
          <TouchableOpacity onPress={() => { setInput(input + 1); console.log(input); }} >
            <View style={{ backgroundColor: 'darkcyan', borderRadius: 30, padding: 10, elevation: 3, margin: '5%', height: 45, width: 150, alignSelf: 'center' }}>
              <Text style={{ color: 'white', textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }}>COUNT</Text>
            </View>
          </TouchableOpacity>
          {/* <View style={{ padding: '25%', margin: '5%' }}>
       <Button title='COUNTER' onPress={() => { setInput(input + 1); console.log(input); }} />
     </View> */}
        </View>

        <Blink text="Count with me!" />
      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'black'
  },
  container1: {
    backgroundColor: 'darkcyan',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: 600,
    width: 350,
    alignSelf: 'center',
    margin: '17%',
    borderRadius: 30
  },
  container2: {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 30

  },

});


