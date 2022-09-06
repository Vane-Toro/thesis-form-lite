import React from "react";
import { Meta, Story } from '@storybook/react'
import { Question } from '../src/Question'

const meta: Meta = {
    title: 'Question',
    component: Question,
}

const singleSelectProps = {
    id: 1,
    type: 'SingleSelect',
    title: 'Single Select Question',
    text: "Here is some text",
    image: 'https://uploads-ssl.webflow.com/5f8efd7611c46166adb2f1aa/60259f77e5d4f1879bc98285_Combined.svg',
    options: [
        { value: 'First choice', },
        { value: 'Second choice' },
    ],
}
const MultiSelectProps = {
    id: 1,
    type: 'MultiSelect',
    title: 'Multi Select Question',
    text: "Here is some text",
    image: 'https://uploads-ssl.webflow.com/5f8efd7611c46166adb2f1aa/60259f77e5d4f1879bc98285_Combined.svg',
    options: [
        { value: 'First choice', },
        { value: 'Second choice' },
        { value: 'Third choice' },
    ],
}

export default meta;

export const SingleSelect = () => <Question question={singleSelectProps} />;
export const MultiSelect = () => <Question question={MultiSelectProps} />;