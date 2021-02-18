import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActionSheetIOS, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Lista extends Component {
  state = {
    data: [
      { id: 0, endereco: 'Rua Alfredo Pujol, 440', bairro: 'Santana', cep: '02017-010', imageUrl: "https://i.pinimg.com/originals/fb/b3/bd/fbb3bda7997446fdf034dddca48cce16.jpg"},
      { id: 1, endereco: 'Rua São João, 200', bairro: 'Centro', cep: '00000-010', imageUrl: "https://saopauloantiga.com.br/wp-content/uploads/2009/04/mauriciooliveira-370x277.jpg"},
      { id: 2, endereco: 'Rua Paraupava, 90', bairro: 'Lapa de Baixo', cep: '04050-900', imageUrl: "https://saopauloantiga.com.br/wp-content/uploads/2011/01/ruaparaupava_90-1.jpg"},
      { id: 3, endereco: 'Praça Clóvis Bevilacqua', bairro: 'República', cep: '01020-300', imageUrl: "https://saopauloantiga.com.br/wp-content/uploads/2012/06/palacetedocarmox.jpg"},
      { id: 4, endereco: 'Estrada das Figueiras, S/N', bairro: 'Jd. Helena', cep: '06764-290', imageUrl: "http://s2.glbimg.com/WLBT18sEDm-HPOKP73gnDyzDMkE=/290x217/s2.glbimg.com/0ypMA1Of4UO5reeyq7LHkSx-N-E=/620x465/s.glbimg.com/jo/g1/f/original/2015/11/17/predio.jpg"},
    ],
  };

  renderItem = ({ item }) => (
    
        <View style={styles.listItem}>
        <Image source={{uri: item.imageUrl}} style={{ width: 300, height: 350, borderRadius: 5, padding: 2,}}></Image>
        <Text>{item.endereco}</Text>
        <Text>Bairro: {item.bairro}</Text>
        <Text>CEP: {item.cep}</Text>

        </View>
        
  );

  render() {
    return (
      <FlatList
        style={{ marginTop: 5}}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 120
    
  },

  listItem: {
    marginTop: 10,
    padding: 40,
    alignItems: 'center',
    width: 300,
    height: 400,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderColor: '#D3D3D3', 
    borderWidth: 1,

  },
});
