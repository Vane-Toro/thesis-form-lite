import React from "react";
import { Meta, Story } from '@storybook/react'
import Quiz from '../src/Quiz'

const initialQuizState = {
    step: 0,
    questions: [
        {
            id: 1,
            type: 'SingleSelect',
            title: 'Single Select Question',
            text: "Here is some text",
            image: 'https://uploads-ssl.webflow.com/5f8efd7611c46166adb2f1aa/60259f77e5d4f1879bc98285_Combined.svg',
            choices: [
                { value: 'First choice', image: 'https://uploads-ssl.webflow.com/5f8efd7611c46166adb2f1aa/60259f77e5d4f1879bc98285_Combined.svg', imageAlt: 'Thesis Logo' },
                { value: 'Second choice' },
            ],
        },
        {
            id: 2,
            type: 'SingleSelect',
            title: 'Second question',
            ctaText: 'Next question',
            choices: [
                { value: 'First choice second' },
                { value: 'Second choice second' },
            ],
        },
        {
            id: 3,
            type: 'MultiSelect',
            text: 'Third question',
            ctaText: 'Next question',
            choices: [
                { value: 'First choice third' },
                { value: 'Second choice third' },
            ],
        },
    ],
    answers: [],
}

const meta: Meta = {
    title: 'Quiz',
    component: Quiz,
}

export default meta;

export const Default = () => {

    return (
        <Quiz initialQuizState={initialQuizState} />
    )
};