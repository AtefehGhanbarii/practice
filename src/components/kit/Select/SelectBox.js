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
  text-align: right;
  padding: 0px 16px;
  top: 37px;
  left: 0;
  right: 0;
  background-color: #ededed;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.27);
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 9px;
  width: 100%;
  color: #282c34;
  display: flex;
  justify-content: center;
  p {
padding: 0px 10px;
font-weight: bold;
  }
  
`;

const OptionWrapper = styled.div`
  padding: 10px;
  color: #101010;
  font-size: 14px;
  font-weight: bold;
`;

export default class Select extends React.Component {
    state = {
        show: false,
        selected: []
    };

    componentDidMount() {
        window.addEventListener('click', this.clickListener);
    }

    clickListener = () => {
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

    // handleSelect = (option) => {
    //     this.toggleOptions();
    //     this.setState({
    //         selected: [...this.state.selected, option]
    //     });
    //     this.props.onSelect(option);
    // };

    handleSelect = (option) => {
        const hasItem = this.state.selected.find((item) => item.name === option.name);
        console.log(hasItem, 'hasitem');
        if (hasItem) {
            this.setState({
                selected: this.state.selected.filter(item => item.name !== option.name)
            })
        } else {
            this.setState({
                selected: this.state.selected.concat(option)
            })
        }
        this.props.onSelect(option);
    };

    render() {
        console.log(this.state.selected);
        const { options, placeholder } = this.props;
        const { show, selected } = this.state;
        return (
            <Container>
                <Button onClick={this.toggleOptions}>
                    {selected && selected.length ?
                        selected.map(item => {
                            return <p>{item.name}</p>
                        })
                        : placeholder}
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
