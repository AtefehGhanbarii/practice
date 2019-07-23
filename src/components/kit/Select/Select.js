import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  align-self: center;
  flex: 1
`;


const Wrapper = styled.div`
  position: absolute;
  z-index: 10000;
  margin: 20px;
  top: 40px;
  left: 0;
  right: 0;
  background-color: #ededed;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.27);
`;

const Button = styled.button`
  border: 1px solid black;
  outline: none;
  padding: 10px 20px 10px 20px;
  width: 100%;
  color: #282c34;
`;

const OptionWrapper = styled.div`
  padding: 10px;
`;


export default class Select extends React.Component {
    state = {
        show: false,
        selected: null
    };

    componentDidMount() {
        window.addEventListener('click', this.clickListener);
    }

    clickListener = () => {
        console.log('its here lisetingn');
        if (this.state.show) {
            this.toggleOptions();
        }
    };


    componentWillUnmount() {
        window.removeEventListener('click', this.clickListener);
    }


    toggleOptions = (event) => {
        if (event) {
            event.stopPropagation();
        }
        this.setState({
            show: !this.state.show
        });
    };

    handleSelect = (option) => {
        this.toggleOptions();
        this.setState({
            selected: option
        });
        this.props.onSelect(option);
    };

    render() {
        const { options, placeholder } = this.props;
        const { show, selected } = this.state;
        return (
            <Container>
                <Button onClick={this.toggleOptions}>
                    {selected ? selected.name : placeholder}
                </Button>
                <Wrapper>
                    {
                        show ? options.map(option => {
                            return (
                                <OptionWrapper onClick={() => this.handleSelect(option)}>
                                    {option.name}
                                </OptionWrapper>
                            );
                        }) : null
                    }
                </Wrapper>
            </Container>
        );
    }
}
