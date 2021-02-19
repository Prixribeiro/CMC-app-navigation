import React from "react";
import { StyleSheet, Text, View, Image} from 'react-native';

// import { Container } from './styles';

export default function Sobre({ navigation }) {
  return (
    

    <View style={styles.container}>
      
      <Text style={styles.titulo2} >O que fazemos?</Text>
      <Text style={styles.text} >Nossa missão é mapear o maior número de imóveis abandonados com a ajuda da população e, com base nesses dados, cobrar as prefeituras locais para que esses imóveis cumpram sua função social da propriedade. </Text>
      <Text style={styles.linha} >___________________________________</Text>
      <Text style={styles.titulo2} >Como?</Text>
      <Text style={styles.text} >Queremos ser o principal aliado de movimentos sociais para expor o problema de déficit de
        moradia, cobrando políticas publicas para que todas as pessoas tenham acesso ao seu Direito à Moradia. </Text>
      <Text style={styles.linha} >___________________________________</Text>
      <Text style={styles.titulo2} >O que queremos?</Text>
      <Text style={styles.text} >Com empatia pelo próximo, queremos usar a tecnologia para trazer
        informações, levantamento de dados e pressão para que causas sociais sejam
        atendidas, diminuindo os níveis do Déficit de Moradia e 
        trabalhando sempre para dar voz às pessoas em vulnerabilidade social.
        habitacional. </Text>
      <Text style={styles.linha} >___________________________________</Text>
      <Text style={styles.titulo1} >Quem somos?</Text>

      <Image source={require('../../../assets/time.png')} style={styles.img}/> 
      

    </View>
    

  );
}

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
    textAlign: 'center',
    fontWeight: 'bold',
    
  },

  linha:{
    color:'#d3d3d3',
    marginVertical: 0
    

  },

  titulo2: {
    marginTop: 14,
    fontWeight: 'bold',
  },

  text: {

    margin: 20,
    marginHorizontal: 30,
    textAlign: 'justify',
  },

  img: {
    marginTop: 20,
    width: 420,
    height: 100
  }


});