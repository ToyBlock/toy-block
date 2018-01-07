import React, {Component} from 'react';
import { View, ScrollView, Image } from 'react-native';
import ListRow from '../components/ListRow';
import Label from '../components/Label';
import Input from '../components/Input';

export default class ListRowDemo extends Component{
    state = {
        valueLG: ''
    }

    onchange = (text) => {
        this.setState({valueLG: text})
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 20}} />
                <ListRow title='Title' detail='Detail' topSeparator='full' />
                <ListRow title={<Label style={{fontSize: 18, color: '#31708f'}} text='Custom title' />} />
                <ListRow title='Custom detail' detail={
                    <View style={{backgroundColor: '#5bc0de', width: 60, height: 24, borderRadius: 4}} />
                } />
                <ListRow title='Long detail' detail={
                    'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
                } />
                <ListRow title='Title place top' detail={
                    'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.'
                } titlePlace='top' />
                <ListRow title='Icon' icon={require('../style/icons/config.png')} accessory='indicator' />
                <ListRow title='Accessory indicator' accessory='indicator' />
                <ListRow title='Custom accessory' accessory={<Image source={require('../style/icons/location.png')} />} />
                <ListRow title='Press able' onPress={() => alert('Press!')} />
                <ListRow
                    title='Swipe able'
                    detail='Swipe to show action buttons'
                    swipeActions={[
                        <ListRow.SwipeActionButton title='Cancel' />,
                        <ListRow.SwipeActionButton title='Remove' type='danger' onPress={() => alert('Remove')}/>,
                    ]}
                    bottomSeparator='full'
                />
                <ListRow title='Size lg' detail={
                    <Input
                        style={{width: 250}}
                        value={this.state.valueLG}
                        placeholder='Size lg'
                        onChangeText={this.onchange }
                    />
                } bottomSeparator='full' />
            </View>
        )
    }
}

