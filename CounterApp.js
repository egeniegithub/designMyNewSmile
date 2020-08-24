import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

function CounterApp (props) {
    console.log('Here Propsssss..... : ', props);
    
    const [counter, setCounter] = React.useState(0);
    return (
        <View style={{flex: 1, justifyContent:"center", alignItems: "center", flexDirection: 'row'}}>
            <TouchableOpacity style={{margin: 8}}
            onPress={props.increaseCounter}
            >
            <Text>Increment</Text>
            </TouchableOpacity>

                <Text>{props.counter}</Text>

            <TouchableOpacity style={{margin: 8}}
            onPress = {props.decreaseCounter}
            >
            <Text>Decrement</Text>
            </TouchableOpacity>
        </View>
    )
}

function mapstateToProps (state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
        decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'})
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(CounterApp);