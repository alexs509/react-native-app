import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Profile from './Profile';


export default class Home extends React.Component {
    constructor() {
        super();
        // need to bind `this` to access props in handler
        this.onPressButton = this.onPressButton.bind(this);
    }
    render() {
        return (
            <React.Fragment>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center', backgroundColor: "" }}>
                        <Text>Home</Text>
                        <Button
                            title="Go to Jane's profile"
                            onPress={this.onPressButton}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center', backgroundColor: "slategrey" }}>
                        <Text>hello world 2.........</Text>
                    </View>
                </View>
            </React.Fragment>
        );
    }
    onPressButton() {
        this.props.navigation.navigate('Profile')
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

