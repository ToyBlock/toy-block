import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

export default class Menu extends Component{
    static propTypes = {
        style: PropTypes.object,
        list: PropTypes.array,
        onPress: PropTypes.func
    }

    handlePress = (id) => () => {
        this.props.onPress(id);

    }
    render() {
        let { list, style } = this.props;
        return (
            <View style={[styles.menu, style]}>
                {
                    list.map((item, index, array) => {
                        return (
                            <MenuItem
                                key={item.id}
                                image={item.image}
                                text={item.text}
                                onPress={ this.handlePress(item.id) }
                                style={array.length !== 1 && index !== array.length - 1 ? styles.borderItem : {}}
                            />
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'column',
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        borderTopColor: '#e0e0e0',
        borderTopWidth: 1,
    },
    borderItem: {
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
    }

})