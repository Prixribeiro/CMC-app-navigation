import React, { Component } from "react";
import { StyleSheet, Image, SafeAreaView, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import Lista from './lista';

// import { Container } from './styles';

function Logado({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
            <View >
                <Text style={styles.titulo}>Aqui você pode ver o {"\n"}progresso das sua sinalizações</Text>

                <Text style={styles.textoBottom}>____________________________________________</Text>
                <TouchableOpacity
                    style={styles.btncadastro}
                    tittle = "Alterar" onPress={(()=>navigation.navigate('Alterar'))}
                >
                    <Text style={styles.btntexto}>Alterar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btncancelar}
                    tittle = "Cancelar" onPress={(()=>navigation.navigate('Deletar'))}
                >
                    <Text style={styles.btntexto}>Deletar</Text>
                </TouchableOpacity>
                <Lista />
                
        </View>
        
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: "center",
      
    },
    
    
    titulo:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin:5
    },
    
    foto: {
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 50,
      marginTop: 15,
      width: 380
    },
    btncadastro: {
        backgroundColor: '#FFD700',
        marginTop: 10,
        padding: 10,
        borderRadius: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginHorizontal: 150
      },
      btntexto: {
        fontWeight: '500',
        fontSize: 18,
      },
      btncancelar: {
        backgroundColor: '#FFF',
        marginTop: 10,
        padding: 10,
        borderRadius: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderColor: '#FF0000', 
        borderWidth: 1,
        marginHorizontal: 150
      },
      textoBottom: {
        textAlign: "center",
        color: '#A9A9A9',
        margin:10
    
      }
  
  });


export default Logado;