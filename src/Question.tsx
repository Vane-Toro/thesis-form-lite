import React from "react";
import { TitleBlock } from "./TitleBlock"
import { SingleSelect } from "./SingleSelect"
import { MultiSelect } from "./MultiSelect"
import { ImageBlock } from "./ImageBlock";
import { questionTypes } from "./types";

import cx from 'classnames'

interface Props {
    question: questionTypes,
    dispatch: React.Dispatch<any>
}

export const Question = ({ question, dispatch }: Props) => {

    const handleAnswerClick = (value: string) => {
        dispatch({ type: 'answer', payload: value })
    }


    return (
        <div className={cx(question.classes, `question question-${question.id}`)} >
            < TitleBlock title={question.title} />
            {question.image && <ImageBlock source={question.image} imageAlt={question.imageAlt} />}
            {question.type === 'SingleSelect' && <SingleSelect choices={question.choices} ctaText={question.ctaText} questionNumber={question.id} handleAnswerClick={handleAnswerClick} />}
            {question.type === 'MultiSelect' && <MultiSelect choices={question.choices} ctaText={question.ctaText} handleAnswerClick={handleAnswerClick} />}

        </div >
    )
}
