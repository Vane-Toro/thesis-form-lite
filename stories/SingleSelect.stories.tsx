import React from 'react';
import { Meta, Story } from '@storybook/react'
import { SingleSelect } from '../src/SingleSelect';


const meta: Meta = {
    title: 'SingleSelect',
    component: SingleSelect,
}

export default meta;

export const Default = () => <SingleSelect options={['option-1', 'option-2', 'option-3']} questionNumber={1} />;