import React, { Component } from 'react';
import MySelect from '../components/kit/Select/Select';


export default class Select extends Component {
    onSelect = (selectedItem) => {
        console.log(selectedItem, 'thi sis seleecteed item in container');
    };

    render() {
        const options = [
            { name: 'مشهد', value: 1 },
            { name: 'تهران', value: 1 },
        ];

        return (
            <div>
                <MySelect
                    options={options}
                    onSelect={this.onSelect}
                    placeholder="select an option"
                />
                <MySelect
                    options={options}
                    onSelect={this.onSelect}
                    placeholder="select an option"
                />
            </div>
        );
    }
}
