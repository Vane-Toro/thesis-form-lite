import React, { HTMLAttributes, useState, } from "react";


interface Props extends HTMLAttributes<HTMLElement> {
    choices: object[],
    ctaText?: string,
    questionNumber: number,
    handleAnswerClick: Function,
}

export const SingleSelect = ({ choices, ctaText, questionNumber, handleAnswerClick }: Props) => {
    const [seletected, setSelected] = useState('')

    const setSelectedChoice = (e) => {
        setSelected(e.target.value)

        // If ctaText is not defined, then we immediately call the handleAnswerClick function
        if (!ctaText) {
            handleAnswerClick(e.target.value)
        }

    }

    return (
        <>
            {
                choices.map((option: object, i: number) => {
                    return (
                        <fieldset key={`fieldset-${i}`}>
                            <label htmlFor={option.value}>{option.value}</label>
                            <input value={option.value} type='radio' name={`question-${questionNumber}`} onChange={setSelectedChoice} />
                        </fieldset>
                    )
                })
            }
            {ctaText && <button onClick={() => handleAnswerClick(seletected)} > {ctaText}</button >}
        </>
    )
}