import React, {useState} from "react";
import { Text, View, StyleSheet, Switch} from "react-native";

const Switch3 = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

return (
    <View>
            <Text style={styles.titulo2}>A calçada está bem feita?</Text>
           <Switch style={styles.switch}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#fff"
                onValueChange={toggleSwitch}
                value={isEnabled}
          />
    </View>
);
}
const styles = StyleSheet.create({
    switch:{
        width: 50,
        margin:10,
        textAlign: 'left',
        justifyContent: 'flex-start',
        width: 350
      },
      titulo2: {
        marginTop: 20,
        fontWeight: '400',
        textAlign: 'left',
        justifyContent: 'flex-start',
        width: 350
      },
    });
    
    export default Switch3;