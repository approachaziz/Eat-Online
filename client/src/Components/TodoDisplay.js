import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todos from './Todos'
import {connect} from 'react-redux';
class TodoDisplay extends Component {
    constructor(props) {
        super(props);
    }
        
    render() {
                return (
            <div>
                {console.log("In TodoDisplay", this.props.todos)}
                <Todos todos={this.props.todos} />
            </div>
        );
    }
}
function mapState(store) {
    return {
        todos: store.todos
    }
}

export default connect(mapState)(TodoDisplay)
