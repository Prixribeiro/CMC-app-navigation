import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView} from 'react-native';


export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const logar = () => {
    alert("usuário logado!");
    
  }

  const redefinir= () => {
    alert("Email de redefinição de senha enviado com sucesso!");
    
  }

  return (
    <KeyboardAvoidingView 
    behavior={"padding"}
    style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
        <View style={styles.views}> 
        <Image source={require('../../../../assets/logo.png')} style={styles.logo}></Image>
        </View>

        <View style={styles.views}> 
          <Text style={styles.titulo}>Entre na sua conta:</Text>
          
          <TextInput 
            style={styles.input}
            placeholder="Digite seu email" onChangeText = {text => setEmail(text)}/>

          <TextInput 
            style={styles.input}
            placeholder="Digite sua senha" onChangeText = {text => setSenha(text)}
            secureTextEntry={true}/>
           </View>

           <View style={styles.views}> 
          <TouchableOpacity style = {styles.btncadastro} onPress={(()=>navigation.navigate('Logado'))}>
            <Text style = {styles.btntexto}>Entrar</Text>           
          </TouchableOpacity>
          </View>

          <View style={styles.views}> 
          <Text style={styles.textoBottom}>Não tem conta?</Text> 
          <TouchableOpacity style = {styles.botao} onPress={(()=>navigation.navigate('Cadastro'))}>
            <Text style = {styles.textoBottom}>Crie uma!</Text>           
          </TouchableOpacity>
          
          </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  views: {
    flex: 0.3,
  },
  texto: {
    fontSize: 20,
    fontWeight: "500"
  },
  logo: {
    margin: 0,
    padding: 10,
    width: 120,
    height: 120,
    position: 'relative'
  },
  input: {
    marginTop: 20,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 15,
    borderRadius: 50,
    borderColor: '#D3D3D3', 
    borderWidth: 1,
  },
  btncadastro: {
    backgroundColor: '#FFD700',
    marginTop: 40,
    padding: 10,
    borderRadius: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70
  },
  btntexto: {
    fontWeight: '500',
    fontSize: 18
  },
  titulo:{
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    margin:10,
    alignItems: 'flex-start',
  },
  botao:{
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    borderColor: '#FFD700', 
    borderWidth: 1,
  },

  textoBottom: {
    textAlign: "center",
    color: '#A9A9A9',

  }

});