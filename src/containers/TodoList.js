import React, { Component } from 'react';
import { Input } from '../components/kit/Input/Input';
import { Button } from "../components/kit/Button/Button";
import List from '../components/kit/List/List';
import Modal from '../components/kit/modal/Modal'

// const items = [
//     { name: 'Atefeh', createdAt: '1398', status: 'pending', id: 1 },
//     { name: 'Ali', createdAt: '1398', status: 'pending', id: 2 },
//     { name: 'hasan', createdAt: '1398', status: 'pending', id: 3 }
// ];

class TodoList extends Component {
    state = {
        items: [],
        todoName: '',
        todoNameList: [],
        showEditModal: false,
        showDeleteModal: false,
        name: '',
        editedId: null
    };

    // componentDidMount() {
    //     this.setState({ items });
    // }

    changeStatus = (id) => {
        console.log(id, 'id in change status');
        const result = this.state.items.map((item, index) => {
            if (index === id) {
                console.log('id is the same', item.id, id);
                return {
                    ...item,
                    status: item.status === 'done' ? 'pending' : 'done'
                };
            }
            return item;
        });
        this.setState({ items: result });
    };

    handleShowEditModal = (name, id) => {
        console.log(name, 'this is name');
        this.setState({
            showEditModal: true,
            name,
            editedId: id
        });
    };

    handleShowDeleteModal = (id) => {
        this.setState({
            showDeleteModal: true,
        });
    };

    handleEditName = () => {
        let shouldUpdateState = true;
        const editedItems = this.state.items.map((item, index) => {
            if (this.state.name === item.name) {
                alert('The entered name is duplicate');
                shouldUpdateState = false;
                return item;
            } else {
                if (index === this.state.editedId) {
                    return {
                        ...item,
                        name: this.state.name
                    };
                }
                return item;
            }
        });
        if (shouldUpdateState) {
            this.setState({
                items: editedItems,
                showEditModal: false
            })
        }
    };

    privacyCancelHandler = () => {
        this.setState({ showEditModal: false });
    };

    handleSubmit = () => {
        const newItem = {
            name: this.state.todoName,
            status: 'pending'
        };
        const foundItem = this.state.items.find(pItem => pItem.name === newItem.name);
        if (foundItem) {
            alert('اسم تکراری');
        } else {
            this.setState({
                items: [...this.state.items, newItem]
            });
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        console.log(this.state.items, 'this is state');
        return (
            <>
                <h4>To Do List</h4>
                <Input
                    title='نام'
                    name="todoName"
                    value={this.state.todoName}
                    onChange={this.handleChange}
                />
                <Button
                    onClick={this.handleSubmit}
                    title='ثبت'
                />
                <List
                    items={this.state.items}
                    changeStatus={this.changeStatus}
                    handleShowEditModal={this.handleShowEditModal}
                />
                <Modal show={this.state.showEditModal} modalClosed={this.privacyCancelHandler}>
                    <button className='closeButModal' onClick={this.privacyCancelHandler}>close</button>
                    <br/>
                    <Input
                        title="نام"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <Button
                        title='ثبت نام جدید'
                        onClick={this.handleEditName}
                    />
                </Modal>

                <Modal show={this.state.showDeleteModal} modalClosed={this.privacyCancelHandler}>
                    <button className='closeButModal' onClick={this.privacyCancelHandler}>close</button>
                    <br/>
                    <p>آیا برای حذف مطمن هستید؟</p>
                    <Button
                        title='ثبت نام جدید'
                        onClick={this.handleEditName}
                    />
                </Modal>
            </>
        );
    }
}


export default TodoList;