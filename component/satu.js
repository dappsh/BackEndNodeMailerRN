import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SocialIcon } from 'react-native-elements';
// import {
//   // Platform `,
//   // StyleSheet,
//   // Text,
//   View
// } from 'react-native';

// var kata = "Halo Ajeng"

//this is for router navigation
// const RootStack = StackNavigator(
//   {
//     HalSatu: { screen: Satu },
//     HalDua: { screen: Dua },
//   },
//   {
//     initialRouteName: 'HalSatu',
//   }
// );

// import { Text } from 'react-native-elements';
// import * as Animatable from 'react-native-animatable';
// import { StackNavigator } from 'react-navigation';
// import Satu from './component/satu';
// import Dua from './component/dua';



 // return (<RootStack />);
class Satu extends Component {
    render() {
        return (
            <View style={{
                flex: 1, alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Hello There </Text>

                <Button color="#841584" title="tap me!"
                    onPress={
                        () => this.props.navigation.navigate('HalDua')}
                />
                {/* <Icon reverse name='sc-telegram' type='evilicon'
                    color='#517fa4' size={30} /> */}

                <Icon name='heartbeat' color='pink'
                    style={{ fontSize: 50 }} />
                    <SocialIcon light raised={false} type='twitter'/>

                <SocialIcon type='facebook' />
                <SocialIcon
                    title='Masuk ke Facebook'
                    button
                    type='facebook'
                />
            </View>
        );
    }
}
export default Satu;