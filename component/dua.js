import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';

class Dua extends Component {
    render() {
        return (
            <View style={{
                flex: 1, alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Hey There  </Text>
                <Button color="#841584" title="Tap me to see more"
                    onPress={
                        () => this.props.navigation.navigate('HalDua')} />
                <Text>I want to say it again & againn!! so I made it squishhh!  </Text>
                

                <Animatable.Text
                    animation="rubberBand" delay={3000} duration={1000}
                    direction="normal" easing="ease-in"
                    iterationCount="infinite"
                    style={{ fontSize: 50, textAlign: 'center' }}>
                    I ♥ U
        </Animatable.Text>

        <Button color="#841584" title="Go Back "
                    onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}
export default Dua;