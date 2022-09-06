import React from 'react';
import { Meta, Story } from '@storybook/react'
import { MultiSelect } from '../src/MultiSelect';


const meta: Meta = {
    title: 'MultiSelect',
    component: MultiSelect,
}

const options = [
    { value: 'First choice', },
    { value: 'Second choice' },
]

export default meta;

export const Default = () => <MultiSelect options={options} />;