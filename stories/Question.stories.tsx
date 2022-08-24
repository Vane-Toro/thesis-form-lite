import React from "react";
import { Meta, Story } from '@storybook/react'
import { Question } from '../src/Question'

const meta: Meta = {
    title: 'Question',
    component: Question,
}

export default meta;

export const Default = () => <Question title={'this is the title block'} options={['option-1', 'option-2', 'option-3']} questionNumber={'1'} />;