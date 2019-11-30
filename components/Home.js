import React from 'react';
import { StyleSheet, Text, View, Button, Animated, Image, Easing, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
    constructor() {
        super();
        this.onPressButton = this.onPressButton.bind(this);
        this.spinValue = new Animated.Value(0)
        this.animatedWidth = new Animated.Value(50)
        this.animatedHeight = new Animated.Value(50)
    }

    animatedBox = () => {
        Animated.timing(this.animatedWidth, {
            toValue: 200,
            duration: 1000
        }).start()
        Animated.timing(this.animatedHeight, {
            toValue: 250,
            duration: 500
        }).start()
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
        const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
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
                        <TouchableOpacity style={styles.container} onPress={this.animatedBox}>
                            <Animated.View style={[styles.box, animatedStyle]} />
                            <Text>☝️</Text>
                        </TouchableOpacity>
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
    box: {
        backgroundColor: 'goldenrod',
        width: 50,
        height: 50
    }
});

