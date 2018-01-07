// TransformViewExample.js

'use strict';

import React, {Component} from 'react';
import {View, Image} from 'react-native';

import Theme from '../style/theme';
import TransformView from '../components/TransformView/TransformView';

export default class TransformViewExample extends Component {

  render() {
    return (
      <TransformView
        style={{backgroundColor: Theme.pageColor, flex: 1}}
        minScale={0.5}
        maxScale={2.5}
      >
        <Image style={{width: 375, height: 300}} resizeMode='cover' source={require('./images/teaset1.jpg')} />
      </TransformView>
    );
  }

}
