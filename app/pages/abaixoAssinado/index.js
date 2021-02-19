import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity} from "react-native";

const textoAlerta = () => {
  alert("Obrigado por participar deste abaixo assinado online!");
  
}

export default function AbaixoAssinado ({ navigation }) {
  return (
    <View style={styles.container}>

      
      <Text style={styles.titulo1} >Precisamos da sua ajuda!</Text>
      <Text style={styles.titulo2} >Ajude a transformar lugares abandonados em moradias para pessoas em situacão {"\n"}de vulnerabilidade social. {"\n"}
      Assine nosso Abaixo assinado online.</Text>
    

      <TextInput style={styles.input}
      placeholder="Seu nome"
      />

      <TextInput style={styles.input}
      placeholder="Seu email"
      />

      <TextInput style={styles.input}
      placeholder="Seu CPF"
      />

      <TouchableOpacity style={styles.button}

                    tittle = "delete" onPress={()=> textoAlerta()}
                >
                    <Text>Enviar</Text>
      </TouchableOpacity>


      <View style={styles.containerblack}>
           <Text style={styles.tituloContainer} >Apoie esta causa!</Text>
           <Text style={styles.textContainer} >Com essa ação você ajuda {"\n"}
            essa sinalização a ganhar mais visibilidade. {"\n"}
            Com isso temos mais força para pressionar {"\n"}
            as Prefeituras para que algo {"\n"}
            seja feito nesse imóvel.
            </Text>

      </View>
    

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
    fontSize: 20,
    padding:0,
    marginTop: 10,
    textAlign: 'left',
    fontWeight: 'bold',
    
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

  titulo2: {
    marginTop: 10,
    fontWeight: '300',
    textAlign: 'center',
    justifyContent: 'center',
    width: 350
  },

  containerblack: {
    flex: 1,
    backgroundColor:'#000000',
    marginTop: 20,
    width:500,
    height: 20,
    justifyContent: 'center'
  },

  tituloContainer: {
    color: 'white',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20
    
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
  }

});


