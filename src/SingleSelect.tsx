import React, { HTMLAttributes, useState, ChangeEvent } from "react";
import { QuestionTypes } from "./types";

export interface SingleSelectProps extends HTMLAttributes<HTMLElement> {
    options: QuestionTypes["options"],
    ctaText?: string,
    questionNumber: number,
    handleAnswerClick: Function,
}


export const SingleSelect = ({ options, ctaText, questionNumber, handleAnswerClick }: SingleSelectProps) => {
    const [selected, setSelected] = useState<string>('')
    const setSelectedChoice = (e: ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value)

        // If ctaText is not defined, then we immediately call the handleAnswerClick function
        if (!ctaText) {
            submitAnswer(e.target.value)
        }

    }

    const submitAnswer = (value: string) => {
        if (selected) {
            setSelected('')
            handleAnswerClick(value)
        }
    }



    return (
        <>
            {
                options.map((option, i: number) => {
                    return (
                        <fieldset key={`fieldset-${i}`}>
                            {option.image && <img src={option.image} alt={option.imageAlt} />}
                            <label htmlFor={option.value}>{option.value}</label>
                            <input value={option.value} checked={selected === option.value} type='radio' name={`question-${questionNumber}`} onChange={setSelectedChoice} />
                        </fieldset>
                    )
                })
            }
            {ctaText && <button onClick={() => submitAnswer(selected)} > {ctaText}</button >}
        </>
    )
}