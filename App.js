import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from "react-native";

import Home from "./app/pages/home";
import Cadastro from "./app/pages/inputs/cadastro";
import Login from "./app/pages/inputs/login";
import Avanco from "./app/pages/avanco";
import SuaSinalizacao from "./app/pages/suaSinalizacao";
import Sobre from "./app/pages/sobre";
import AbaixoAssinado from "./app/pages/abaixoAssinado";
import Delete from "./app/pages/inputs/delete";
import Alterar from "./app/pages/inputs/modificar";
import Logado from "./app/pages/UserLogado";

const Tab = createBottomTabNavigator();
const Stack  = createStackNavigator();

function App() {
  createHomeNavi = () => (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#FFD700'}}>
      <Tab.Screen name="Login" component={Login} 
      options={{tabBarLabel: 'Login', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />),
    }}/>
      <Tab.Screen name="Avancos" component={Avanco} 
      options={{tabBarLabel: 'Avanços', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="chart-line" color={color} size={size} />),
    }}/>
      <Tab.Screen name="Home" component={Home} 
      options={{tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />),
    }}/>
      <Tab.Screen name="Abaixo Assinado" component={AbaixoAssinado} 
      options={{tabBarLabel: 'Apoie', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="clipboard-text" color={color} size={size} />),
    }}/>
      <Tab.Screen name="Sinalizar" component={SuaSinalizacao} 
      options={{tabBarLabel: 'Sinalize', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="alert" color={color} size={size} />),
    }}/>
      
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={createHomeNavi} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name= "SuaSinalizacao" component={SuaSinalizacao} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sobre" component={Sobre} 
        options={{title: 'Cadê minha casa?'}}/> 
        <Stack.Screen name="Abaixo Assinado" component={AbaixoAssinado} /> 
        <Stack.Screen name="Avancos" component={Avanco} /> 
        <Stack.Screen name="Deletar" component={Delete} />
        <Stack.Screen name="Alterar" component={Alterar} />
        <Stack.Screen name="Logado" component={Logado} 
        options={{title: 'Bem vindo!'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;