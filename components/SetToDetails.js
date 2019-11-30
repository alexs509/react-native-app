import React from 'react';
import { View } from 'react-native';
import Details from './Details';


export default class SetToDetails extends React.Component {
    constructor() {
        super();
    }

    render() {
        const datas = {
            name: "Benjamin Godard - Victor Hugo",
            lnt: 2.275725,
            lat: 48.865983,
            nbbike: 8,
            nbebike: 2,
            nbfree: 8
        }
        return (
            <React.Fragment>
                <View style={{ flex: 1 }}>
                    <Details name={datas.name} lnt={datas.lnt} lat={datas.lat} nbbike={datas.nbbike} nbebike={datas.nbebike} nbfree={datas.nbfree} />
                </View>
            </React.Fragment>
        );
    }
}