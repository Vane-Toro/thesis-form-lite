import React from "react";
import { TitleBlock } from "./TitleBlock"
import { SingleSelect } from "./SingleSelect"
import { MultiSelect } from "./MultiSelect"
import { Button } from "./Button";

interface Props {
    options: string[];
    title: string;
    questionNumber: string;
    questionType: 'singleSelect' | 'multiSelect';
    ctaText: string
}

export const Question = ({ options, title, questionNumber, questionType, ctaText }: Props) => {
    return (
        <>
            <TitleBlock title={title} />
            {questionType === 'singleSelect' && <SingleSelect options={options} questionNumber={questionNumber} />}
            {questionType === 'multiSelect' && <MultiSelect options={options} />}
            <Button ctaText={ctaText} />
        </>
    )
}
