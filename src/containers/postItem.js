import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  p{
  font-size: 16px;
  font-weight: bold;
  }
`;

const PostItem = (props) => {
    console.log(props);
    return (
        <Div>
            <p>اطلاعات {props.match.params.username}</p>
            کد: {props.match.params.id} <br/>
            {props.match.params.username}
        </Div>
    )
};


export default PostItem;