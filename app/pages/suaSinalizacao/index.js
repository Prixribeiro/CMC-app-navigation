import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView, TextArea} from "react-native";
import Switch1 from './switch1';
import Switch2 from './switch2';
import Switch3 from './switch3';

const msgEnvio= () => {
  alert("Imóvel cadastrado com sucesso!");
  
}

const SuaSinalizacao = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  

  return (
  
  <View style={styles.container}>
    <StatusBar hidden />
    <ScrollView>
      
    <View style={styles.containerblack}>
          <Text style={styles.tituloContainer}>
            COM ESTA AÇÃO {"\n"}
            <Text style={styles.detalhe}>VOCÊ </Text>  
            AJUDA MUITA GENTE</Text>
      </View>
      <View style={styles.container}>
      <TextInput 
            style={styles.input}
            placeholder="CEP" onChangeText = {text => setCep(text)}/>

          <TextInput 
            style={styles.input}
            placeholder="Estado" onChangeText = {text => setEstado(text)}/>
          
          <TextInput 
            style={styles.input}
            placeholder="Cidade" onChangeText = {text => setCidade(text)}/>

          <TextInput 
            style={styles.input}
            placeholder="Bairro" onChangeText = {text => setBairro(text)}/>

          <TextInput 
            style={styles.input}
            placeholder="Endereço" onChangeText = {text => setEndereco(text)}/>

          <TextInput 
            style={styles.input}
            placeholder="Número" onChangeText = {text => setNumero(text)}/>

          <Switch1 />
          <Switch2 />
          <Switch3 />

          <Text style={styles.titulo2}> Informações adicionais</Text>
          <TextInput style={styles.inputMsg}placeholder='Caso tenha informações adicionais do local, descreva aqui.' onChangeText = {text => setMsg(text)}/>
          
          <TouchableOpacity
                    style={styles.btncadastro}
                    tittle = "Enviar" onPress={()=> msgEnvio()}
                >
                    <Text style={styles.btntexto}>Enviar</Text>
          </TouchableOpacity>


      </View>
      </ScrollView>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo1: {
    fontSize: 18,
    padding:0,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '400',
    
  },

  input: {
    marginTop: 20,
    padding: 10,
    width: 380,
    backgroundColor: '#fff',
    fontSize: 15,
    borderRadius: 50,
    borderColor: '#D3D3D3', 
    borderWidth: 1,
  },

  containerblack: {
    flex: 1,
    backgroundColor:'#000000',
    marginTop: 0,
    width:414,
    height: 200,
    justifyContent: 'center',
  },

  tituloContainer: {
    color: 'white',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '500',
    marginVertical: 20
    
  },
  detalhe: {
    color: '#FFD700',
    fontWeight: 'bold'
  },

  textContainer: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20
    
  },

  button: {
      backgroundColor: '#FFD700',
      width: 380,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      marginTop: 20
  },
  titulo2: {
    marginTop: 20,
    fontWeight: '400',
    textAlign: 'left',
    justifyContent: 'flex-start',
    width: 380
  },
  inputMsg: {
    marginTop: 10,
    padding: 10,
    width: 380,
    height: 150,
    backgroundColor: '#fff',
    fontSize: 15,
    borderRadius: 10,
    borderColor: '#D3D3D3', 
    borderWidth: 1,
    fontSize: 13
  },
  btncadastro: {
    backgroundColor: '#FFD700',
    marginTop: 30,
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

});

export default SuaSinalizacao;
