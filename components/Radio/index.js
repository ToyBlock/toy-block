import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import RadioForm from 'react-native-simple-radio-button';

class RadioButtonRound extends Component {
    static defaultProps = {
        header: '',
        types: [],
        initialValue: '',
    }

    static propTypes = {
        header: PropTypes.string,
        types: PropTypes.arrayOf(PropTypes.shape),
        initialValue: PropTypes.number,
    }

    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue
        };
    }

    render = () => {
        const { header, types, defaultValue } = this.props;
        return (
            <View style={styles.centreItems}>
                <Text> {header} </Text>
                <RadioForm
                    radio_props={types}
                    initial={defaultValue}
                    formHorizontal
                    buttonColor="#2196f3"
                    animation
                    onPress={(value) => { this.setState({
                        value: value
                    }) }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centreItems: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default RadioButtonRound;