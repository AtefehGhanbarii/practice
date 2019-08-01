import React, { Component } from 'react';
import SelectBox from '../components/kit/Select/SelectBox';

export default class Select extends Component {
    onSelect = (selectedItem) => {
        console.log(selectedItem, 'thi sis seleecteed item in container');
    };

    render() {
        const options = [
            { name: 'مشهد', value: 1 },
            { name: 'تهران', value: 2 },
            { name: 'بابلسر', value: 3 },
            { name: 'اصفهان', value: 4 },
            { name: 'شیراز', value: 5 },
        ];

        return (
            <div>
                <SelectBox
                    options={options}
                    onSelect={this.onSelect}
                    placeholder="شهر را انتخاب کنید"
                    multiSelect
                />
            </div>
        );
    }
}
