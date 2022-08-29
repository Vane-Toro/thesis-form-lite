import React from "react";
import { TitleBlock } from "./TitleBlock"
import { SingleSelect } from "./SingleSelect"
import { MultiSelect } from "./MultiSelect"
import { Button } from "./Button";
import { useQuestionContext } from './QuestionContext'

import cx from 'classnames'

interface Props {
    options: string[],
    title: string,

    questionType: 'singleSelect' | 'multiSelect',
    classes?: string,
    ctaText?: string,
}

export const Question = ({ options, title, questionType, classes, ctaText }: Props) => {
    const questionNumber = useQuestionContext()


    return (
        <div className={cx(classes, `question question-${questionNumber}`)} >
            < TitleBlock title={title} />
            <h1>Current question is {questionNumber}</h1>
            {questionType === 'singleSelect' && <SingleSelect options={options} questionNumber={questionNumber} />}
            {questionType === 'multiSelect' && <MultiSelect options={options} />}
            {ctaText && <Button ctaText={ctaText} />}
        </div >
    )
}
