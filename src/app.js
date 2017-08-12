import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button } from './components/common';

class App extends Component {
    render() {
        return (
            <View>
                <Header headerText="Authentication"></Header>
                <Text>An App!</Text>
                <Button>A button</Button>
            </View>
        )
    }
} 

export default App;