/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Container,
  Content,
  Header,
  Form,
  Item,
  Input,
  Label,
  Text,
  Button,
  Icon,
  Body, 
  Title
} from 'native-base';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      penerima: "",
      subject: "",
      pesan: ""
    };
  }

  send() {
    var url = `http://192.168.5.3:3210/sendemail`;
    axios.post(url, {
      terima: this.state.penerima,
      judul: this.state.subject,
      emailpesan: this.state.pesan
    }).then((x) => {
      alert(x.data)
    }).catch((y) => { alert(y.data) })
  }

 
  render() {
    return (

      <Container>
  
        <Header>
          <Body>


            <Button transparent full>
              <Title style={{ fontSize: 20, color: 'white' }}>
                React Native <Icon name="heart" style={{ fontSize: 23, color: 'red' }} /> Nodemailer
              </Title>
            </Button>
          </Body>
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label> To (email recipient) </Label><Input  onChangeText={(x)=>{this.setState({penerima: x})}}  />
            </Item>
            <Item floatingLabel>
              <Label> Email Subject </Label><Input  onChangeText={(x)=>{this.setState({subject: x})}} />
            </Item>
            <Item floatingLabel last>
              <Label> Messages </Label><Input  onChangeText={(x)=>{this.setState({pesan: x})}} />
            </Item>
          </Form>

          <Button onPress={()=>{this.send()}} block>
            <Icon name="mail" />
            <Text style={{  fontSize: 18 }}>SEND EMAIL</Text>
          </Button>


          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            Email akan dikirim dari email
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            dwiajengpps@gmail.com
          </Text>

        </Content>


      </Container>

    )
  }
}
export default App;
