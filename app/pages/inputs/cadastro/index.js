import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, SafeAreaView} from 'react-native';


export default function Login({navigation}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ConfSenha, setConfSenha] = useState ('');
  
  const logar = () => {
    alert("Obrigado por se cadastrar no \n Cadê Minha Casa? \n Faça seu Login!");
    
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
          <Text style={styles.titulo}>Cadastre-se:</Text>
          
          <TextInput 
            style={styles.input}
            placeholder="Seu nome" onChangeText = {text => setNome(text)}/>

          <TextInput 
            style={styles.input}
            placeholder="Seu email" onChangeText = {text => setEmail(text)}/>

          <TextInput 
            style={styles.input}
            placeholder="Sua senha" onChangeText = {text => setSenha(text)}
            secureTextEntry={true}/>
          
          <TextInput 
            style={styles.input}
            placeholder="Confirme sua senha" onChangeText = {text => setConfSenha(text)}
            secureTextEntry={true}/>

           </View>

           <View style={styles.views}> 
          <TouchableOpacity style = {styles.btncadastro} onPress={() => logar()}>
            <Text style = {styles.btntexto}>Cadastrar</Text>           
          </TouchableOpacity>
          </View>

          <View style={styles.views}> 
          <Text style={styles.textoBottom}>Já tem uma conta?</Text> 
          <TouchableOpacity style = {styles.botao} onPress={(()=>navigation.navigate('Login'))}>
            <Text style={styles.textoBtn}>Entre aqui!</Text>           
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
    padding: 10,
    width: 120,
    height: 120,
    position: 'relative'
  },
  input: {
    marginTop: 15,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 15,
    borderRadius: 50,
    borderColor: '#D3D3D3', 
    borderWidth: 1,
  },
  btncadastro: {
    color: 'white',
    backgroundColor: '#FFD700',
    marginTop: 120,
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
    margin:5,
    alignItems: 'flex-start',
  },
  botao:{
    marginTop: 10,
    padding: 10,
    borderRadius: 50,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderColor: '#FFD700', 
    borderWidth: 1,
  },

  textoBottom: {
    marginTop: 40,
    textAlign: "center",
    color: '#A9A9A9',

  },
  textoBtn: {
    textAlign: "center",
    color: '#A9A9A9',
  }

});
