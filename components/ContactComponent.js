import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import { ScrollView, Text } from "react-native";
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
              <Card 
                    title='Contact Information'
                    wrapperStyle={{margin: 20}}
                >
                    <text>1 Nucamp Way</text>
                    <text>Seattle, WA 98001</text>
                    <text wrapperStyle={{marginbottom: 20}}>U.S.A.</text>
                    <text>Phone: 1-206-555-1234</text>
                    <text>Email: campsites@nucamp.com</text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;