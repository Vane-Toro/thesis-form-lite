import React, { HTMLAttributes, useState } from 'react';

interface Props extends HTMLAttributes<HTMLInputElement> {
    choices: object[],
    ctaText: string,
    handleAnswerClick: Function,
}


export const MultiSelect = ({ choices, ctaText, handleAnswerClick }: Props) => {
    const [selections, setSelections] = useState([]);

    const updateSelections = (e) => {
        selections.includes(e.target.name) ? setSelections(selections.filter(selection => selection !== e.target.name)) : setSelections([...selections, e.target.name])
    }

    return (
        <>
            {choices.map((option: object, i: number) => {
                return (
                    <>
                        <fieldset key={`fieldset-${i}`} >
                            <label htmlFor={option.value}>{option.value}</label>
                            <input name={option.value} value={option} type='checkbox' onChange={updateSelections} />
                        </fieldset>
                    </>
                )

            })}
            <button onClick={() => handleAnswerClick(selections)}> {ctaText}</button >
        </>

    )
}