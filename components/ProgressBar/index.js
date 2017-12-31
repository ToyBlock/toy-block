'use strict'


import  React  from 'react';
import  {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    LayoutAnimation,
} from 'react-native';

export default class ProgressBarClassic extends React.Component {
    constructor() {
        super()
        this.state = {
            progress: 0,
            init_animation: false,
        }
    }

    componentDidMount() {
        LayoutAnimation.spring()
        setTimeout(()=>{
            this.setState({progress: this.props.progress})
        }, 0)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({progress: nextProps.progress})
    }

    componentWillUpdate() {
        LayoutAnimation.spring()
    }

    render() {

        let label = null
        let marginTop = 0

               let value = (
                    <View style={styles.progressBar_mes}>
                        <Text style={styles.progressBar__val}>{this.state.progress}%</Text>
                    </View>
                )


        return  (
                <View style={[styles.flexBox, styles.progressBar, {marginTop: marginTop}]}>
                    <View style={[styles.progressBar_left, {flex:this.state.progress}]}>
                        {value}
                    </View>
                    <View style={[styles.progressBar_right, {flex:100 - this.state.progress}]}></View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    flexBox: {
        flexDirection: 'row',
        width: "98%"
    },
    progressBar: {
        overflow: 'hidden',
        height: 20,
        borderWidth: 2,
        borderColor: '#00b39e',
        borderRadius: 10,
        marginBottom: 5,
    },
    progressBar_left: {
        backgroundColor: '#00b39e',
    },
    progressBar_right: {
        backgroundColor: '#fff',
    },
    progressBar_mes: {
        position: 'absolute',
        right: 0,
        paddingRight: 5,
         //lineHeight: 30,
        backgroundColor: 'rgba(0,0,0,0)',
        flexDirection: 'row',
    },
    progressBar__val: {
         //textAlign: 'center',
        color: '#fff',
         //lineHeight: 30,
    },

});

ProgressBarClassic.defaultProps = {
    progress: 0,
}