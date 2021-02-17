import React, { Component } from "react";
import { Text, View, TouchableOpacity} from "react-native";

export default function Home(props){
  const {navigation} = props;
  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity
                    style={{
                        backgroundColor: '#FFD700',
                        width: 200,
                        height: 30,
                        alignItems: 'center',
                        justifyContente: 'center',
                        borderRadius: 50
                    }}

                    tittle = "sobre" onPress={()=>navigation.navigate('Sobre')}
                >
                    <Text>Conheça o projeto</Text>

                </TouchableOpacity>

    </View>
  );
}


