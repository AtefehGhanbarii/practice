import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Div = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
a {
padding: 12px 40px;
text-decoration: none;
font-weight: bold;
}
`;

const Posts = () => {
    return (
        <Div>
            <h4>POSTS</h4>
            <Link to="/posts/1/محصول اول"> پست اول</Link><br />
            <Link to="/posts/2/محصول دوم">پست دوم</Link><br />
            <Link to="/posts/3/محصول سوم">پست سوم</Link><br />
        </Div>
    )
};


export default Posts;