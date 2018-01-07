import React, {Component} from 'react';
import { View } from 'react-native';
import Button from '../components/Button';

export default class ButtonDemo extends Component{
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button size='sm' type='primary' title="小按钮" />
                <Button size='md' type='secondary' title="小按钮" />
                <Button size='lg' type='dark' title="小按钮" />
                <Button shape='full' type='danger' title="小按钮" />
                <Button shape='circle' type='primary' title="点" />
                <Button size='sm' shape='circle' type='link' title="点" />
                <Button size='lg' shape='circle' type='primary' title="点" />
            </View>
        )
    }
}

