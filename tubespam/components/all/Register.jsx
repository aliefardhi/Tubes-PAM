import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image, StatusBar, ToastAndroid } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
const Register  = (props) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [nomortelephone, setNomorTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [katasandi, setKataSandi] = useState("");
  const [confirm_katasandi, setConfirm_katasandi] = useState("");

    return (
      <ScrollView >
        <View style={{ flex: 1, alignItems: 'center' ,backgroundColor:"white"}}>
        <Text style={styles.header}>Register</Text>
        <View style={styles.textInputWrapper}>
          <TextInput style={styles.textInput} onChangeText={(name) => setName( name )} value={name} placeholder="Nama" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(username) => setUsername( username )} value={username} placeholder="Username" placeholderTextColor="grey" />
          <TextInput keyboardType="numeric" style={styles.textInput} onChangeText={(nomortelephone) => setNomorTelephone( nomortelephone )} value={nomortelephone} placeholder="Nomor Telephone" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(Email) => setEmail( Email )} value={email} placeholder="Email" placeholderTextColor="grey" />
          <TextInput style={styles.textInput} onChangeText={(alamat) => setAlamat( alamat )} value={alamat} placeholder="Alamat" placeholderTextColor="grey" />
          <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(katasandi) => setKataSandi( katasandi )} value={katasandi} placeholder="Kata Sandi" placeholderTextColor="grey" />
          <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={(confirm_katasandi) => setConfirm_katasandi( confirm_katasandi )} value={confirm_katasandi} placeholder="Konfirmasi Kata Sandi" placeholderTextColor="grey" />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('')}>   
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
dropdownWrapper:{
    width: 200,
    alignSelf: "flex-start",
},
  header: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textInputWrapper: {
    marginTop: 40,
    marginBottom: 10,
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
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#2978B5",
    elevation: 8,
    borderRadius: 30,
    height: 45,
    justifyContent: "center",
    width: 250,
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

export default Register;