import React from "react";
import { TitleBlock } from "@sheridan-media/tpl-react";
import { SingleSelect } from "./SingleSelect"
import { MultiSelect } from "./MultiSelect"
import { ImageBlock } from "./ImageBlock";
import { QuestionTypes } from "./types";

import cx from 'classnames'

interface Props {
    question: QuestionTypes,
    dispatch: React.Dispatch<any>
}

export const Question = ({ question, dispatch }: Props) => {

    const handleAnswerClick = (value: string) => {
        dispatch({ type: 'answer', payload: value })
    }


    return (
        <div className={cx(question.classes, `question question-${question.id}`)} >
            <TitleBlock title={question.title} />
            {question.image && <ImageBlock source={question.image} imageAlt={question.imageAlt} />}
            {question.type === 'SingleSelect' && <SingleSelect options={question.options} ctaText={question.ctaText} questionNumber={question.id} handleAnswerClick={handleAnswerClick} />}
            {question.type === 'MultiSelect' && <MultiSelect options={question.options} ctaText={question.ctaText} handleAnswerClick={handleAnswerClick} />}

        </div >
    )
}
