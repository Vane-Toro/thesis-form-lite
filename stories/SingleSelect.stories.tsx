import React from 'react';
import { Meta, Story } from '@storybook/react'
import { SingleSelect } from '../src/SingleSelect';


const meta: Meta = {
    title: 'SingleSelect',
    component: SingleSelect,
}

const options = [
    { value: 'First choice', },
    { value: 'Second choice' },
]

export default meta;

export const Default = () => <SingleSelect options={options} />;