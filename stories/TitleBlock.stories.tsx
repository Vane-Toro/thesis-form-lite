import React from "react";
import { Meta, Story } from '@storybook/react'
import { TitleBlock } from '@sheridan-media/tpl-react'

const meta: Meta = {
    title: 'TitleBlock',
    component: TitleBlock,
}

export default meta;

export const Default = () => <TitleBlock kicker='Some small text' title='This is the title' text="This is the text" />;