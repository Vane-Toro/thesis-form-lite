import React from "react";
import { Meta, Story } from '@storybook/react'
import { TFL } from '../src/TFL'
import { Question } from "../src/Question";
import { Button } from "../src/Button";

const meta: Meta = {
    title: 'TFL',
    component: TFL,
}

export default meta;

export const Default = () => {
    return (
        <TFL >
            <Question title={'This is a single select question'} options={['option-1', 'option-2', 'option-3']} questionNumber={1} questionType='singleSelect' classes="optional" />
            <Button ctaText="Next" as='button' />
        </TFL>
    )
};