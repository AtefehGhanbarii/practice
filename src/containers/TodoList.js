import React, { Component } from 'react';
import { Input } from '../components/kit/Input/Input';
import { Button } from "../components/kit/Button/Button";
import ListItem from '../components/kit/List/ListItem';
import List from '../components/kit/List/List';

const items = [
    { name: 'Atefeh', createdAt: '1398', status: 'pending' }
];

class TodoList extends Component {
    render() {
        return (
            <List Items={items}/>
        );
    }
}


export default TodoList;