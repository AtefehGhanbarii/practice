import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from '../List/ListItem';

const Div = styled.div`
border: 1px solid #000;
background-color: #eee;
display: flex;

justify-content: space-around;
direction: rtl;
h5 {

}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

class List extends Component {
    render() {
        const { Items } = this.props;
        return (
            Items.map((Item) => {
                return (
                   <ListItem />
                );
            })
        )
    }
}


export default List;