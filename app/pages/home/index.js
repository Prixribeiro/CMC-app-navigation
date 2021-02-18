import React, { Component } from "react";
import { StyleSheet, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';


export default function Home(props){
  const {navigation} = props;
  return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={styles.titulo}>Ajude mais de 6 milhões de famílias {"\n"}
                mapeando locais abandonados</Text>
            
              <TouchableOpacity style={styles.btncadastro} tittle = "sinalizar" onPress={()=>navigation.navigate('Sinalizar')}>
                <Text style = {styles.btntexto}>Faça sua parte!</Text>
              </TouchableOpacity>

                <Text style={styles.titulo}>______________________________</Text>
           
                <Image style={styles.foto} source={require('../../../assets/cmc-home.png')}></Image>
            
            <TouchableOpacity style={styles.botao} tittle = "sobre" onPress={()=>navigation.navigate('Sobre')}>
              <Text style = {styles.textoBottom}>Conheça o projeto</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: "center",
      
    },
    
    titulo:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin:30
    },
    
    btncadastro: {
      backgroundColor: '#FFD700',
      marginTop: 15,
      padding: 10,
      borderRadius: 50,
      width: 300,
      justifyContent: 'center',
      alignItems: 'center',
      height: 70,
      marginHorizontal: 90
    },
    btntexto: {
      fontWeight: '500',
      fontSize: 18,
    },
    foto: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 50,
      marginTop: 15,
      width: 380
    },
    botao:{
      marginTop: 15,
      padding: 10,
      borderRadius: 50,
      width: 180,
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: 45,
      borderColor: '#FFD700', 
      borderWidth: 1,
      marginHorizontal: 150
    },
  
    textoBottom: {
      textAlign: "center",
      color: '#A9A9A9',
  
    }
  
  });
