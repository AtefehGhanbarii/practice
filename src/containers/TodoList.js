import React, { Component } from 'react';
import { Input } from '../components/kit/Input/Input';
import { Button } from "../components/kit/Button/Button";
import List from '../components/kit/List/List';
import Modal from '../components/kit/modal/Modal'

class TodoList extends Component {
    state = {
        items: [],
        todoName: '',
        todoNameList: [],
        showEditModal: false,
        showDeleteModal: false,
        name: '',
        editedId: null,
        deletingId: null
    };

    changeStatus = (id) => {
        const result = this.state.items.map((item, index) => {
            if (index === id) {
                return {
                    ...item,
                    status: item.status === 'done' ? 'pending' : 'done'
                };
            }
            return item;
        });
        this.setState({ items: result });
    };

    handleShowEditModal = (id) => {
        this.setState({
            showEditModal: true,
            name: this.state.items[id].name,
            editedId: id
        });
    };

    toggleDeleteModal = (id) => {
        this.setState({
            showDeleteModal: !this.state.showDeleteModal,
            deletingId: id
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
            });
        }
    };

    handleDeleteItem = () => {
        const delItem = this.state.items.filter((item, index) => index !== this.state.deletingId);
        this.setState({ items: delItem, showDeleteModal: false })


    };

    editModalCancelHandler = () => {
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
                    handleDeleteModal={this.toggleDeleteModal}
                />
                <Modal show={this.state.showEditModal} modalClosed={this.editModalCancelHandler}>
                    <button className='closeButModal' onClick={this.editModalCancelHandler}>close</button>
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

                <Modal show={this.state.showDeleteModal} modalClosed={this.toggleDeleteModal}>
                    <button className='closeButModal' onClick={this.toggleDeleteModal}>close</button>
                    <br/>
                    <p>آیا برای حذف مطمن هستید؟</p>
                    <Button
                        title='بله'
                        onClick={this.handleDeleteItem}
                    />
                    <Button
                        title='خیر'
                        onClick={this.toggleDeleteModal}
                    />
                </Modal>
            </>
        );
    }
}


export default TodoList;