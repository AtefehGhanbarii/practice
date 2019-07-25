// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
    title: String,
    type: 'primary' | 'secondary';
    onClick: Function,
    disabled: Boolean,
    loading: Boolean,
    style: Object
};

const InputSty = styled.input`
  // background-color: ${props => props.type === 'primary' ? 'blue' : 'red'}
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #eee;
  text-align: right;
  border-radius: 3px;
  float: left;
  ...${props => props.style}
`;

export const Input = (props: Props) => {
    return (
        <>
            {props.title}
            <InputSty
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
        </>
    );
};

// Button.defaultProps = {
//     title: 'دکمه',
//     type: 'primary',
//     disabled: false,
//     loading: false,
//     style: {}
// };

