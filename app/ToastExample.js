// ToastExample.js

'use strict';

import React, {Component} from 'react';
import {View, ScrollView, ActivityIndicator, Text} from 'react-native';

import ListRow from '../components/ListRow';
import Toast from '../components/Toast/index';
import Theme from '../style/theme';

export default class ToastExample extends Component {

  static customKey = null;

  showCustom() {
    if (ToastExample.customKey) return;
    ToastExample.customKey = Toast.show({
      text: 'Toast custom',
      icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
      position: 'top',
      duration: 1000000,
    });
  }

  hideCustom() {
    if (!ToastExample.customKey) return;
    Toast.hide(ToastExample.customKey);
    ToastExample.customKey = null;
  }

  render() {
    let img = require('./images/faircup.jpg');
    return (
      <ScrollView style={{flex: 1}}>
          <View style={{height: 40, width: 100}}  >
              <Text style={{color: '#000', height: 40, fontSize: 16 }} onPress={() => Toast.message('Toast message')}  >
                  点我
              </Text>
          </View>
        <ListRow title='Message' onPress={() => Toast.message('Toast message')} topSeparator='full' />
        <ListRow title='Success' onPress={() => Toast.success('Toast success')} />
        <ListRow title='Fail' onPress={() => Toast.fail('Toast fail')} />
        <ListRow title='Smile' onPress={() => Toast.smile('Toast smile')} />
        <ListRow title='Sad' onPress={() => Toast.sad('Toast sad')} />
        <ListRow title='Info' onPress={() => Toast.info('Toast info')} />
        <ListRow title='Stop' onPress={() => Toast.stop('Toast stop')} bottomSeparator='full' />
        <View style={{height: 20}} />
        <ListRow title='Show custom' onPress={() => this.showCustom()} topSeparator='full' />
        <ListRow title='Hide custom' onPress={() => this.hideCustom()} bottomSeparator='full' />
      </ScrollView>
    );
  }

}
