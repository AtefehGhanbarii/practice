// import React, { Component } from 'react';
// import { Button } from '../Button/Button';
//
// export default class Tabs extends Component {
//     state = {
//         tabs: []
//     };
//
//     componentDidMount() {
//         this.setState({
//             tabs: this.props.tabs
//         });
//     }
//
//     // const tabs = [
//     //     { name: 'tab1', id: 1, active: false },
//     //     { name: 'tab2', id: 2, active: true },
//     //     { name: 'tab3', id: 3, active: false },
//     //     { name: 'tab4', id: 4, active: false },
//     //     { name: 'tab5', id: 5, active: false }
//     // ];
//     //
//
//     // children
//     // <Tab id={1}><Shop/></Tab>
//     // <Tab id={2}><Counter/></Tab>
//     // <Tab id={3}>salam 3</Tab>
//     // <Tab id={4}>salam 4</Tab>
//     // <Tab id={5}>salam 5</Tab>
//
//     renderTabContent = () => {
//         const { children } = this.props;
//         const { tabs } = this.state;
//         return children.map(child => {
//             const foundItem = tabs.find(tab => tab.id === child.props.id);
//             if (foundItem && foundItem.active) {
//                 return child;
//             }
//         });
//     };
//
//     changeTab = (tab) => {
//         const { tabs } = this.state;
//         const result = tabs.map(tabItem => {
//             if (tabItem.id === tab.id) {
//                 return {
//                     ...tabItem,
//                     active: true
//                 };
//             }
//             return {
//                 ...tabItem,
//                 active: false
//             };
//         });
//         this.setState({
//             tabs: result
//         });
//     };
//
//     renderTab = () => {
//         const { tabs } = this.state;
//         return tabs.map(tab => {
//             return (
//                 <Button
//                     title={tab.name}
//                     style={tab.active ? { backgroundColor: 'blue' } : {}}
//                     onClick={() => this.changeTab(tab)}
//                 />
//             );
//         });
//     };
//
//     render() {
//         return (
//             <div>
//                 {
//                     this.renderTab()
//                 }
//                 {
//                     this.renderTabContent()
//                 }
//             </div>
//         );
//     }
// }

import React, { Component } from "react";
import { Button } from '../Button/Button';

class Tabs extends Component {
    state = {
        tabs: []
    };

    componentDidMount() {
        this.setState({
            tabs: this.props.tabs
        });
    }

    changeTab = (tab) => {
        const { tabs } = this.state;
        const result = tabs.map((tabItem) => {
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
        this.setState({ tabs: result });
    };

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

    shouldComponentUpdate(nextProps, nextState) {
        const thisActiveTab = this.state.tabs.find(tab => tab.active);
        const nextActiveTab = nextState.tabs.find(tab => tab.active);
        return !(thisActiveTab && thisActiveTab.id === nextActiveTab.id);// prevent render the page
    };

    render() {
        const { tabs } = this.state;
        console.log('render shod ');
        return (
            <div>
                {
                    tabs.map((tab) => {
                        return (
                            <div>
                                <Button
                                    title={tab.name}
                                    onClick={() => this.changeTab(tab)}
                                    style={tab.active ? { backgroundColor: 'blue' } : {}}
                                />
                            </div>
                        );
                    })
                }
                {
                    this.renderTabContent()
                }
            </div>
        );
    }
}


export default Tabs;
















