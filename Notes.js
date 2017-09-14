import React, {Component} from 'react';
import {
    Text,
    View,
    ListView,
    TouchableHighlight,
    TextInput,
    StyleSheet
} from 'react-native';

var styles= StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#E3E3E3'
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    }
})

export default class Notes extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TextInput 
                    value="abc"
                />
                <TouchableHighlight
                    underlayColor='#88D4F5'
                >
                    <Text style={styles.buttonText}> Submit </Text>
                </TouchableHighlight>
            </View>
        )
    }
}