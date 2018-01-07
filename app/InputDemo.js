import React, {Component} from 'react';
import { View } from 'react-native';
import Input from '../components/Input';
import SearchInput from '../components/Search/index';

export default class InputDemo extends Component{
    state = {
        value: ''
    }

    handleChange = (value) => {
        this.setState({
            value: value
        })
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Input size='sm' placeholder='请输入名称' />
                <Input size='md' value={this.state.value} onChange={this.handleChange} />
                <Input size='lg' />

                <SearchInput
                    style={{width: 200}}
                    value={this.state.value}
                    placeholder='搜索'
                    onChange={this.handleChange}
                    clearButtonMode='while-editing'
                />

            </View>
        )
    }
}

