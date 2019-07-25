import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoDisplay from './TodoDisplay';
import todos from './TodoDisplay'
import { connect } from 'react-redux';
// import { deleteTodo } from '../Redux/action/action';
import classNames from 'classnames';

import { UncontrolledCollapse, Button, CardBody, Card,ButtonGroup } from 'reactstrap';

// import './TodoStyle'
// import { Badge, Button } from 'reactstrap';
console.log("Todos chell raha");
var num=0;
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        // width: 12,
    
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

const AlignT = {
  width:'15%'
};
const RightLeft={
 textAlign:'center'
}

const Todos = (props) => {
    let todos = this.props.todos;
    const todoList=todos.length ? (
      todos.map(todo => {
            return (
      
    <div  className="collection-item"  className="divStyle" key={todo.title}>
            <td >{todo.name}</td>
            <td > {todo.phone}</td>
            <td > {todo.address}</td>

<td>
            {/* <div>
    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Address
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          {todo.description}
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div> */}
  </td>  
            </div>
            
)    
        })    
    )
: (
        // <p className="center"></p>
        console.log("khaali")
)
  
    console.log(todoList+"IN TODOS");
    return (
<div>
  
  <div className="todos Collection" key={todos.id}>
            {todoList}
        </div>
        </div>
);
}

Todos.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default connect(num, null)(Todos);
