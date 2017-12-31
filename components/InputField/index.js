import React, {
    Component,
} from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';


class InputField extends Component {
    static propTypes = {
        placeholder: PropTypes.string,
    }

    static defaultProps = {
        placeholder: '',
    }

    render = () => {
        const { placeholder } = this.props;
        return (
            <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                style={[styles.inputField, styles.shadow]}
                placeholder={placeholder}
            />
        );
    }
}

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: 'white',
        color: '#424242',
        height: 50,
        width: 270,
        marginTop: 10,
        padding: 4,
        paddingLeft: 10,
        fontSize: 18,
        borderRadius: 10,
        alignSelf: 'center',
    },
    shadow: {
        shadowColor: '#616161',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 1,
    },
})

export default InputField;