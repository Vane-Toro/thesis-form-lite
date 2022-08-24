import React from "react";
import { TitleBlock } from "./TitleBlock"
import { SingleSelect } from "./SingleSelect"

interface Props {
    options: string[];
    title: string;
    questionNumber: string;
}

export const Question = ({ options, title, questionNumber }: Props) => {
    return (
        <>
            <TitleBlock title={title} />
            <SingleSelect options={options} questionNumber={questionNumber} />
        </>
    )
}
