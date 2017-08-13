import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

    state = { 
        email: '', 
        password: '',
        error: '',
        loading: false
    }


    /**
     * Login user on firebase
     */
    onButtonPress() {

        const { email, password } = this.state;

        this.setState({ 
            error: '', 
            loading: true}
        )

        // Try to login on firebase with email and password
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            });

    }


    /**
     * Handle success login on firebase
     */
    onLoginSuccess() {

        // Clean stuff
        this.setState({
            loading: false,
            error: '',
            email: '',
            password: ''
        })
    }


    /**
     * Handle failed login on firebase
     */
    onLoginFail() {
        this.setState({
            loading: false,
            error: 'Authentication failed'
        });
    }

    /**
     * Decide to use Button or Render tag
     */
    renderButton() {
        if (this.state.loading)
            return <Spinner size="small" />;

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        )
    }


    render() {

        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        value={this.state.email}
                        placeholder="user@gmail.com"
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Password"
                        value={this.state.password}
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )

    }
}


const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;