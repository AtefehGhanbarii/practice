import React, { Component } from 'react';
import { Button } from '../Button/Button';

export default class Tabs extends Component {
    state = {
        tabs: []
    };

    componentDidMount() {
        this.setState({
            tabs: this.props.tabs
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(' ============================================= ShouldComponentUpdate =============================================');
        console.log(nextProps, 'this is nextProps');
        console.log(nextState, 'this is nextState');
        console.log(' ============================================= ShouldComponentUpdate =============================================');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(' ============================================= componentWillUpdate =============================================');
        console.log(nextProps, 'this is nextProps');
        console.log(nextState, 'this is nextState');
        console.log(' ============================================= componentWillUpdate =============================================');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(' ============================================= ComponentDidUpdate =============================================');
        console.log(prevProps, 'this is prevProps');
        console.log(prevState, 'this is prevState');
        console.log(' ============================================= ComponentDidUpdate =============================================');
    }

    componentWillMount() {
        console.log('this is componentWillMount');
    }

    renderTabContent = () => {
        const { children } = this.props;
        const { tabs } = this.state;
        return children.map(child => {
            const foundItem = tabs.find(tab => tab.id === child.props.id);
            if (foundItem && foundItem.active) {
                return child;
            }
        });
    };

    changeTab = (tab) => {
        const { tabs } = this.state;
        const result = tabs.map(tabItem => {
            if (tabItem.id === tab.id) {
                return {
                    ...tabItem,
                    active: true
                };
            }
            return {
                ...tabItem,
                active: false
            };
        });
        this.setState({
            tabs: result
        });
    };

    renderTab = () => {
        const { tabs } = this.state;
        return tabs.map(tab => {
            return (
                <Button
                    title={tab.name}
                    style={tab.active ? { backgroundColor: 'blue' } : {}}
                    onClick={() => this.changeTab(tab)}
                />
            );
        });
    };

    render() {
        console.log('rendreerrrrrrr');
        return (
            <div>
                {
                    this.renderTab()
                }
                {
                    this.renderTabContent()
                }
            </div>
        );
    }
}
