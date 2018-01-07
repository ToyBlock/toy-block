import React, {Component} from 'react';
import { ScrollView, View } from 'react-native';
import Button from '../components/Button';
import ActionSheet from '../components/ActionSheet/ActionSheet';

export default class ActionSheetDemo extends Component{
    show = (modal) => () => {
        let items = [
            {title: 'Say hello', onPress: () => alert('Hello')},
            {title: 'Do nothing'},
            {title: 'Disabled', disabled: true},
        ];
        let cancelItem = {title: 'Cancel'};
        ActionSheet.show(items, cancelItem, {modal});
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button onPress={this.show(true)} title='点我' />
            </View>
        )
    }
}

