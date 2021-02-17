import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// import { Container } from './styles';

const SuaSinalizacao = ({navigation}) => {
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

                    tittle = "Modificar" onPress={()=>navigation.navigate('modificar')}
                >
                    <Text>Alterar dados</Text>
      </TouchableOpacity>
      <TouchableOpacity
                    style={{
                        backgroundColor: '#FFD700',
                        width: 200,
                        height: 30,
                        alignItems: 'center',
                        justifyContente: 'center',
                        borderRadius: 50
                    }}

                    tittle = "delete" onPress={()=>navigation.navigate('delete')}
                >
                    <Text>Excluir imóvel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuaSinalizacao;
