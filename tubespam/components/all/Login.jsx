import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";

const Login  = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <Text style={styles.header}>Selamat Datang</Text>
          <Image  style={styles.logo} source={require( 'D:/KULIAH/SEMESTER 6/PAM/Tubes/tubespam/assets/logo.png')}/>
          <View style={styles.textInputWrapper}>
            <TextInput style={styles.textInput} onChangeText={(username) => setUsername( username )} value={username} placeholder="Username" placeholderTextColor="grey" />
            <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(password) => setPassword( password )} value={password} placeholder="Password" placeholderTextColor="grey" />
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("")}>
              <Text style={styles.buttonText}>Masuk</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>atau</Text>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Register")}>
              <Text style={styles.buttonText}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 50,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 100,
    alignSelf: "center",
  },
  logo: {
    width: 135,
    height: 135,
    alignSelf: "center",
    marginHorizontal: 'auto',
    marginVertical: 25,
    justifyContent: "center",
  },
  textInputWrapper: {
    marginTop: 40,
    marginBottom: 20,
    width: 350,
  },
  textInput: {
    color: "#000000",
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  buttonWrapper: {
    width: 350,
    marginTop: 30,
  },
  button: {
    backgroundColor: "#2978B5",
    elevation: 8,
    borderRadius: 30,
    height: 45,
    justifyContent: "center",
    width: 200,
    alignSelf: "center",
  },
  buttonText: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 18,
  },
  orText: {
    fontSize: 20,
    alignSelf: "center",
    color: "#808080",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Login;