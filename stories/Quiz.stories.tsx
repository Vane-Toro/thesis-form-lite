import React from "react";
import { Meta, Story } from '@storybook/react'
import Quiz from '../src/Quiz'

const initialQuizState = {
    step: 0,
    questions: [
        {
            id: 1,
            type: 'MultiSelect',
            title: 'Single Select Question',
            text: "Here is some text",
            image: 'https://uploads-ssl.webflow.com/5f8efd7611c46166adb2f1aa/60259f77e5d4f1879bc98285_Combined.svg',
            options: [
                { value: 'First choice', },
                { value: 'Second choice' },
            ]

        },
        {
            id: 2,
            type: 'SingleSelect',
            title: 'Second question',
            ctaText: 'Next question',
            options: [
                { value: 'First choice second' },
                { value: 'Second choice second' },
            ],
        },
        {
            id: 3,
            type: 'MultiSelect',
            text: 'Third question',
            ctaText: 'Next question',
            options: [
                { value: 'First choice third' },
                { value: 'Second choice third' },
                { value: 'Third choice third' },
            ],
        },
        {
            id: 4,
            type: 'MultiSelect',
            text: 'Third question',
            ctaText: 'Next question',
            options: [
                { value: 'First choice fourth' },
                { value: 'Second choice fourth' },
                { value: 'Third choice fourth' },
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