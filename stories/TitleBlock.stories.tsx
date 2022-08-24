import React from "react";
import { Meta, Story } from '@storybook/react'
import { TitleBlock } from '../src/TitleBlock'

const meta: Meta = {
    title: 'TitleBlock',
    component: TitleBlock,
}

export default meta;

export const Default = () => <TitleBlock title={'Some title'} />