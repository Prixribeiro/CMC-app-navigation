import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity} from "react-native";

const textoAlerta = () => {
  alert("Obrigado por participar desta petição online!");
  
}

export default function AbaixoAssinado ({ navigation }) {
  return (
    <View style={styles.container}>

      
      <Text style={styles.titulo1} >Ajude esse local:</Text>
      <Text style={styles.titulo2} >Bairro:</Text>
      <Text style={styles.titulo2} >Logradouro:</Text>
      <Text style={styles.titulo2} >Número</Text>

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
           <Text style={styles.tituloContainer} >Como você ajuda?</Text>
           <Text style={styles.textContainer} >Com essa ação você ajuda {"\n"}
            essa sinalização a ganhar mais força. {"\n"}
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
    fontWeight: 'bold',
    textAlign: 'left',
    fontWeight: 'bold',
    justifyContent: 'flex-start',
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


