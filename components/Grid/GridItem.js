import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';


class GridItem extends Component {
    static propTypes = {
        value: PropTypes.string,
        title: PropTypes.string,
        col: PropTypes.number,
    }

    static defaultProps = {
        value: '',
        title: '',
        col: 1,

    }
    render = () => {
        const { value, title, col, style } = this.props;

        let colStyle = {
            borderRadius: 10,
            backgroundColor: 'white',
            width: vw(100) / col,
            ...style
        }

        return (
            <View style={[colStyle, styles.shadow]}>
                <Text style={styles.profileValues}> {value} </Text>
                <Text style={[styles.label, styles.smallText]}>
                    {title}
                </Text>
            </View>
        );
    }
}

function vw(percentageWidth) {
    return Dimensions.get('window').width * (percentageWidth / 100);
}

const COLUMNS = 4;
const MARGIN = vw(1);
const SPACING = ((COLUMNS + 1) / COLUMNS) * MARGIN;

const styles = StyleSheet.create({
    profileValues: {
        fontSize: 32,
        textAlign: 'center',
        marginTop: 10,
        color: '#4990E2',
    },
    smallText: {
        color: '#4990E2',
        fontSize: 12,
        alignSelf: 'center',
        marginTop: 5,
    },
    shadow: {
        shadowColor: '#444',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 1,
    },
})

export default GridItem;