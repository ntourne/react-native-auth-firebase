import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {
        loggedIn: null,
        title: 'Loading...'
    }

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

        // Subscribe to login or logout user
        firebase.auth().onAuthStateChanged((user) => {
            if (user)
                this.setState({ loggedIn: true, title: 'Welcome!' });
            else
                this.setState({ loggedIn: false, title: 'Sign in to start' });
        })
    }

    
    renderContent() {

        switch (this.state.loggedIn) {

            // If logged in, display Logout button
            case true:
                return (
                    <View>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </View>
                );

            // If logged out, display Login form
            case false:
                return <LoginForm />;

            // If fetching auth from firebase, display Spinner
            default:
                return <Spinner size="large" />;       

        }
    }


    render() {
        return (
            <View>
                <Header headerText={this.state.title}></Header>
                {this.renderContent()}
            </View>
        )
    }
} 

export default App;