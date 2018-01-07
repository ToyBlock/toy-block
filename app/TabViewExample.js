// TabViewExample.js

'use strict';

import React, {Component} from 'react';
import { View, ScrollView, Image, Switch, Platform} from 'react-native';
import ListRow from '../components/ListRow';
import TabView from '../components/TabView/index';
import Label from '../components/Label';
import PullPicker from '../components/PullPicker/PullPicker'

export default class TabViewDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 'projector',
      custom: false,
    };
  }

  renderCustomButton() {
    let bigIcon = (
        <View style={{
          width: 54,
          height: 54,
          borderRadius: 27,
          shadowColor: '#ccc',
          shadowOffset: {height: -1},
          shadowOpacity: 0.5,
          shadowRadius: 0.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image
            style={{width: 44, height: 44, borderRadius: 22}}
            source={require('./images/faircup.jpg')}
            />
        </View>
    );
    return (
      <TabView.Sheet
        type='button'
        title='Custom'
        icon={bigIcon}
        iconContainerStyle={{justifyContent: 'flex-end'}}
        onPress={() => alert('Custom button press')}
        />
    );
  }

  render() {
    let {type, custom} = this.state;
    let customBarStyle = Platform.OS == 'android'  ? null : {
      borderTopWidth: 0,
      shadowColor: '#ccc',
      shadowOffset: {height: -1},
      shadowOpacity: 0.4,
      shadowRadius: 0.5,
    };
    return (
      <TabView style={{flex: 1}} barStyle={custom ? customBarStyle : null} type={type}>
        <TabView.Sheet
          title='Home'
          icon={require('./icons/home.png')}
          activeIcon={require('./icons/home_active.png')}
        >
          <HomePage
            type={type}
            custom={custom}
            onChangeType={type => this.setState({type})}
            onChangeCustom={custom => this.setState({custom})}
            />
        </TabView.Sheet>
        {custom ? this.renderCustomButton() : null}
        <TabView.Sheet
          title='Me'
          icon={require('./icons/me.png')}
          activeIcon={require('./icons/me_active.png')}
          badge={1}
        >
          <MePage />
        </TabView.Sheet>
      </TabView>
    );
  }

}

class HomePage extends Component {

  selectType() {
    let {type, onChangeType} = this.props;
    let items = ['projector', 'carousel'];
    PullPicker.show(
      'Type',
      items,
      items.indexOf(this.props.type),
      (item, index) => onChangeType && onChangeType(item)
    );
  }

  render() {
    let {type, custom, onChangeCustom} = this.props;
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 20}} />
        <ListRow title='Type' detail={type} onPress={() => this.selectType()} topSeparator='full' bottomSeparator='full' />
        <View style={{height: 20}} />
        <ListRow title='Custom' detail={<Switch value={custom} onValueChange={value => onChangeCustom(value)} />} topSeparator='full' bottomSeparator='full' />
      </ScrollView>
    );
  }

}

class MePage extends Component {

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Label type='detail' size='xl' text={this.props.title} />
      </View>
    );
  }

}
