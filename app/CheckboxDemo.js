import React, {Component} from 'react';
import { View } from 'react-native';
import Checkbox from '../components/Checkbox';

export default class CheckboxDemo extends Component{

    state = {
        checked: true
    }

    onChange = (value) => {
        this.setState({
            checked: value
        })
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Checkbox checked size='md' title="复选框" onChange={this.onChange} />
                <Checkbox size='lg' title="复选框" />
            </View>
        )
    }
}

