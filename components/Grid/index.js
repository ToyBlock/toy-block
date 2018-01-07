import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';

import GridItem from './GridItem';

import {vw, baseStyles} from '../../style/basic';


export default class Grid extends Component{
    static propTypes = {
        list: PropTypes.array,
        col: PropTypes.number,
        border: PropTypes.bool,
        style: PropTypes.object
    };
    static defaultProps = {
        list: [],
        col: 4,
        border: true,
        style: {}
    }

    handleClick = (key) => () => {
        let { onClick } = this.props;
        onClick && onClick(key);
    }

    renderItem = () => {
        let { list, col, border } = this.props;
        return list.map((item, index) => {
            let itemCom = null;
            let itemStyle = {
                width: vw(100) / col,
            }
            if(border){
                itemStyle.borderBottomWidth = 1;
                itemStyle.borderBottomColor = baseStyles.border;
                if((index + 1) % col !== 0){
                    itemStyle.borderRightWidth = 1;
                    itemStyle.borderRightColor = baseStyles.border;
                }
            }
            if(item.children){
                itemCom = (
                    <GridItem
                        key={item.key}
                        style={itemStyle}>
                        { item.children }
                    </GridItem>
                )
            }else{
                itemCom = (
                    <GridItem
                        key={item.key}
                        col={col}
                        style={[itemStyle, item.style]}
                        title={item.title}
                        image={item.image}
                        onPress={this.handleClick(item.key)}
                    />
                )
            }
            return itemCom;
        })
    }
    render() {
        let { list, col, border, style } = this.props;
        return (
            <View style={[styles.grid_container, border ? styles.border : '', style]}>
                {
                   this.renderItem()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    grid_container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    border: {
        borderTopColor: baseStyles.border,
        borderTopWidth: 1,
    }
})