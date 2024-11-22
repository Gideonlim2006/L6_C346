import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput,Alert} from 'react-native';
import {datasource} from "./Data";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [letter, setLetter] = useState('');
    const [type, setType] = useState('');

    return (
        <View style={{padding:10}}>
            <View style={{padding:10}}>
            <Text style={{fontWeight: "bold"}}>Letter:</Text>
            <TextInput style={{borderWidth: 1}} maxLength={1} onChangeText={(text) => setLetter(text)} />
            </View>

            <RNPickerSelect onValueChange={(value) => setType(value)}
                            items={[
                                { label: 'Vowels', value: 'Vowels' },
                                { label: 'Consonants', value: 'Consonants' },
                            ]}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", padding: 10 }}>
                <View style={{ flex: 1, padding: 5 }}>
                    <Button
                        title="SUBMIT"
                        onPress={() => {
                            let item = { key: letter };
                            let indexnum = 1;
                            if (type == "Vowels") {
                                indexnum = 0;
                            }
                            datasource[indexnum].data.push(item);
                            navigation.navigate("Home");
                        }}
                    />
                </View>
                <View style={{ flex: 1, padding: 5 }}>
                    <Button
                        title="BACK"
                        onPress={() => navigation.navigate("Home")}
                    />
                </View>
            </View>

        </View>
    )
}

export default Add;
