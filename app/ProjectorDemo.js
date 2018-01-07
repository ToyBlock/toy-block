import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';
import Button from '../components/Button';
import Label from '../components/Label';
import Input from '../components/Input';
import ListRow from '../components/ListRow';
import Projector from '../components/Projector';

export default class ProjectorDemo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    renderSlide(color) {
        return (
            <View style={{backgroundColor: color, padding: 30, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Label text='Enter something' />
                <View style={{height: 12}} />
                <View><Input style={{backgroundColor: 'rgba(255, 255, 255, 0.3)', width: 200}} /></View>
            </View>
        );
    }

    renderButton(i) {
        return (
            <Button
                title={i}
                type={this.state.index == i ? 'primary' : 'default'}
                onPress={() => this.setState({index: i})}
            />
        );
    }

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
                <Projector style={{height: 238}} index={this.state.index}>
                    {this.renderSlide('rgba(170, 240, 141, 0.1)')}
                    {this.renderSlide('rgba(123, 207, 249, 0.1)')}
                    {this.renderSlide('rgba(250, 231, 133, 0.1)')}
                    {this.renderSlide('rgba(244, 131, 131, 0.1)')}
                </Projector>
                <View style={{height: 20}} />
                <ListRow
                    title='Slide no'
                    detail={
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                            {this.renderButton(0)}
                            {this.renderButton(1)}
                            {this.renderButton(2)}
                            {this.renderButton(3)}
                        </View>
                    }
                    topSeparator='full'
                    bottomSeparator='full'
                />
            </ScrollView>
        );
    }
}

