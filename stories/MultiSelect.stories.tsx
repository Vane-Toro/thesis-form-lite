import React from 'react';
import { Meta, Story } from '@storybook/react'
import { MultiSelect } from '../src/MultiSelect';


const meta: Meta = {
    title: 'MultiSelect',
    component: MultiSelect,
}

export default meta;

export const Default = () => <MultiSelect options={['option-1', 'option-2', 'option-3']} />;