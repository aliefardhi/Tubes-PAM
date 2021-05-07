import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.judul}>Selamat Datang</Text>
        <Image style={styles.logo} source={require('./assets/logo.png')}></Image>
      </View>

      <View style={styles.input}>
        <TextInput placeholder="Username" style={styles.textInput}/>
        <TextInput placeholder="Password" style={styles.textInput}/>
      </View>

      <View style={styles.pilihan}>
        <TouchableOpacity style={styles.tombol} color="#2978B5" title='Masuk'>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
        <Text style={styles.atau}>atau</Text>
        <TouchableOpacity style={styles.tombol} color="#2978B5" title='Daftar' >
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto'
  },
  header: {
    flex: 3,
    marginTop: 59,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  judul: {
    fontSize: 36,
  },
  input: {
    flex: 2,
    marginBottom: -70,
  },
  pilihan: {
    flex: 2,
    width: '90%',
    alignItems: 'center',
    
  },
  textInput: {
    height: 40,
    borderColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 7,
    marginTop: 5,
    width: 320
  },
  tombol:{
    backgroundColor: "#2978B5",
    elevation: 8,
    borderRadius: 30,
    height: 45,
    justifyContent: "center",
    width: 200,
    alignSelf: "center"
  },
  buttonText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 18,
  },
  atau:{
    marginTop: 11,
    marginBottom: 11,
    fontSize: 20,
    color: "#808080",
  },
  logo:{
    height: 132,
    width: 149,
    marginTop: 25, 
  }
});
