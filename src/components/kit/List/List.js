import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from '../List/ListItem';

const Div = styled.div`
border: 1px solid #000;
background-color: #eee;
display: flex;
justify-content: space-around;
direction: rtl;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

class List extends Component {
    render() {
        console.log(this.props);
        const { items, changeStatus, handleShowEditModal, handleDeleteModal } = this.props;
        return (
            <div>
                {
                    items.map((Item, index) => {
                        return (
                            <Div>
                                <ListItem
                                    id={index}
                                    item={Item}
                                    changeStatus={changeStatus}
                                    handleShowEditModal={handleShowEditModal}
                                    handleDeleteModal={() => handleDeleteModal(index)}
                                />
                            </Div>
                        )
                    })
                }
            </div>
        )
    }
}


export default List