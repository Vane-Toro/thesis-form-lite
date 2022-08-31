import React from "react";
import { Meta, Story } from '@storybook/react'
import Quiz from '../src/Quiz'

const initialQuizState = {
    step: 0,
    questions: [
        {
            id: 1,
            type: 'SingleSelect',
            title: 'First question',
            choices: [
                { value: 'First choice' },
                { value: 'Second choice' },
            ],
            ctaText: 'Next question'
        },
        {
            id: 2,
            type: 'MultiSelect',
            text: 'Second question',
            choices: [
                { value: 'First choice second' },
                { value: 'Second choice second' },
            ],
        },
        {
            id: 3,
            type: 'MultiSelect',
            text: 'Third question',
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