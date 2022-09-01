import React, { useReducer, useEffect, ReactNode } from "react";
import { TitleBlock } from "./TitleBlock"
import { SingleSelect } from "./SingleSelect"
import { MultiSelect } from "./MultiSelect"

import cx from 'classnames'

interface Props {
    question: object,
    dispatch: Function
}

export const Question = ({ question, dispatch }: Props) => {

    const handleAnswerClick = (value: string) => {
        dispatch({ type: 'answer', payload: value })
    }


    return (
        <div className={cx(question.classes, `question question-${question.id}`)} >
            < TitleBlock title={question.title} />
            <h1>Current question is {question.id}</h1>
            {question.type === 'SingleSelect' && <SingleSelect choices={question.choices} ctaText={question.ctaText} questionNumber={question.id} handleAnswerClick={handleAnswerClick} />}
            {question.type === 'MultiSelect' && <MultiSelect choices={question.choices} />}

        </div >
    )
}
