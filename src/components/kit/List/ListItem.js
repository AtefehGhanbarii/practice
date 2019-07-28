import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from "../Button/Button";

const Div = styled.div`
display: flex;
p{
padding: 10px 10px;
}
`;

class ListItem extends Component {
    render() {
        console.log(this.props, 'this is props');
        const { item: { name, createdAt, status }, id } = this.props;
        return (
            <Div>
                <p>{name}</p>
                <p>{createdAt}</p>
                <p>{status}</p>
                <Button
                    onClick={() => this.props.changeStatus(id)}
                    title="ثبت"
                />
                <Button
                    onClick={() => this.props.handleShowEditModal(name, id)}
                    title="ویرایش"
                />
                <Button
                    onClick={() => this.props.handleShowDeleteModal(id)}
                    title="حذف"
                />
            </Div>
        )
    }
}


export default ListItem;