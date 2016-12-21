import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import QuestionApp from '../components/QuestionApp';
import * as QuestionCreators from '../actions/index';
class App extends Component {
    render() {
        return (
            <QuestionApp {...this.props}/>
        )
    }
}

/**
 * 将 state 和 action 绑定到 组件props中
 */
export default connect(
    state => ({questionapp: state.questionapp}),
    dispatch => bindActionCreators(QuestionCreators, dispatch)
)(App)


