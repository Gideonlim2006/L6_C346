import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput,Alert} from 'react-native';
import {datasource} from "./Data";

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);

    return(
        <View style={{padding:10}}>
            <View style={{padding:10}}>
                <Text style={{fontWeight: "bold"}}>Letter:</Text>
                <TextInput style={{borderWidth: 1}} maxLength={1} value={letter} onChangeText={(text) => setLetter(text)} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 10 }}>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="SAVE"
                        onPress={() => {
                            let indexnum = 1
                            if (route.params.type == "Vowels") {
                                indexnum = 0;
                            }
                            datasource[indexnum].data[route.params.index].key = letter;
                            navigation.navigate("Home");
                        }}
                    />
                </View>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="DELETE"
                        onPress={() => {
                            let indexnum = 1
                            if (route.params.type == "Vowels") {
                                indexnum = 0;
                            }
                            Alert.alert("Are you sure?",'',
                                [{text: 'Yes', onPress: ()=> {
                                    datasource[indexnum].data.splice(route.params.index, 1);
                                    navigation.navigate("Home");
                                    }},
                                    {text: 'No'}])
                        }}
                    />
                </View>
            </View>
        </View>
    )

}

export default Edit;
