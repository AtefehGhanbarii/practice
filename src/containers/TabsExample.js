import React, { Component } from 'react';
import Tabs from '../components/kit/Tabs/Tabs';
import Tab from '../components/kit/Tabs/Tab';
import Shop from './shop';
import Counter from './counter';


export default class TabsExample extends Component {
    render() {
        const tabs = [
            { name: 'tab1', id: 1, active: false },
            { name: 'tab2', id: 2, active: true },
            { name: 'tab3', id: 3, active: false },
            { name: 'tab4', id: 4, active: false },
            { name: 'tab5', id: 5, active: false }
        ];
        return (
            <div>
                <Tabs tabs={tabs}>
                    <Tab id={1}><Shop/></Tab>
                    <Tab id={2}><Counter/></Tab>
                    <Tab id={3}>salam 3</Tab>
                    <Tab id={4}>salam 4</Tab>
                    <Tab id={5}>salam 5</Tab>
                </Tabs>
            </div>
        );
    }
}
