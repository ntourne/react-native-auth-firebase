import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {


    componentWillMount() {

        // Initialize Firebase
        firebase.initializeApp({
            apiKey: "AIzaSyBhpzZrZ0JA7LfRY9ZMoJK8b1uCqp43XRY",
            authDomain: "react-native-auth-850d2.firebaseapp.com",
            databaseURL: "https://react-native-auth-850d2.firebaseio.com",
            projectId: "react-native-auth-850d2",
            storageBucket: "react-native-auth-850d2.appspot.com",
            messagingSenderId: "27901225345"
        });
    }

    
    render() {
        return (
            <View>
                <Header headerText="Authentication"></Header>
                <LoginForm />
            </View>
        )
    }
} 

export default App;