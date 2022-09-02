import React, { HTMLAttributes, useState, ChangeEvent } from "react";
import { questionTypes } from "./types";

export interface SingleSelectProps extends HTMLAttributes<HTMLElement> {
    choices: questionTypes["choices"],
    ctaText?: string,
    questionNumber: number,
    handleAnswerClick: Function,
}


export const SingleSelect = ({ choices, ctaText, questionNumber, handleAnswerClick }: SingleSelectProps) => {
    const [selected, setSelected] = useState<string>('')

    const setSelectedChoice = (e: ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value)

        // If ctaText is not defined, then we immediately call the handleAnswerClick function
        if (!ctaText) {
            submitAnswer(e.target.value)
        }

    }

    const submitAnswer = (value: string) => {
        handleAnswerClick(value)
        setSelected('')
    }



    return (
        <>
            {
                choices.map((option, i: number) => {
                    return (
                        <fieldset key={`fieldset-${i}`}>
                            {option.image && <img src={option.image} alt={option.imageAlt} />}
                            <label htmlFor={option.value}>{option.value}</label>
                            <input value={option.value} type='radio' name={`question-${questionNumber}`} onChange={setSelectedChoice} />
                        </fieldset>
                    )
                })
            }
            {ctaText && <button onClick={() => submitAnswer(selected)} > {ctaText}</button >}
        </>
    )
}