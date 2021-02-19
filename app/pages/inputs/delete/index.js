import React, { Component } from "react";
import { StyleSheet, Image, SafeAreaView, Text, TouchableOpacity, View, ScrollView} from 'react-native';

const alerta = () => {
  alert("Imóvel excluido com sucesso!");
  
}

function Delete({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
            <View >
                <Text style={styles.titulo}>Você tem certeza que quer excluir {"\n"} as informações sobre o {"\n"}local cadastrado?</Text>

                <Text style={styles.textoBottom}>____________________________________________</Text>
                <TouchableOpacity
                    style={styles.btncadastro}
                    tittle = "deletar" onPress={()=>alerta()}
                >
                    <Text style={styles.btntexto}>Sim</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btncancelar}
                    tittle = "cancelar" onPress={(()=>navigation.navigate('Logado'))}
                >
                    <Text style={styles.btntexto}>Não</Text>
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


export default Delete;