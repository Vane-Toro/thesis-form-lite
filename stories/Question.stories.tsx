import React from "react";
import { Meta, Story } from '@storybook/react'
import { Question } from '../src/Question'

const meta: Meta = {
    title: 'Question',
    component: Question,
}

export default meta;

export const SingleSelect = () => <Question title={'This is a single select question'} options={['option-1', 'option-2', 'option-3']} questionNumber={'1'} questionType='singleSelect' ctaText="Next" />;
export const MultiSelect = () => <Question title={'This is a multi select question'} options={['option-1', 'option-2', 'option-3']} questionNumber={'1'} questionType='multiSelect' ctaText="Next" />;