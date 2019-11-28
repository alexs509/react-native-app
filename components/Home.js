import React from 'react';
import { StyleSheet, Text, View, Button, Animated, Image, Easing } from 'react-native';
import Profile from './Profile';
import Details from './Details';


export default class Home extends React.Component {
    constructor() {
        super();
        this.onPressButton = this.onPressButton.bind(this);
        this.spinValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.spin()
    }

    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }


    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        const datas = {
            name : "Benjamin Godard - Victor Hugo",
            lnt : 2.275725,
            lat : 48.865983,
            nbbike: 8
        }

        return (
            <React.Fragment>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "slategrey" }}>
                        <Animated.Image
                            style={{
                                width: 227,
                                height: 200,
                                transform: [{ rotate: spin }]
                            }}
                            source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "" }}>
                        <Text>Home</Text>
                        <Button
                            title="Go to Jane's profile"
                            onPress={this.onPressButton}
                        />
                        <Details object = {datas}  />
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

