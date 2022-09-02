import React, { HTMLAttributes, useState, ChangeEvent } from 'react';
import { questionTypes } from './types';

interface Props extends HTMLAttributes<HTMLInputElement> {
    choices: questionTypes["choices"],
    ctaText?: string,
    handleAnswerClick: Function,
}





export const MultiSelect = ({ choices, ctaText, handleAnswerClick }: Props) => {
    const [selections, setSelections] = useState<String[]>([]);
    console.log(choices);

    const updateSelections = (e: ChangeEvent<HTMLInputElement>) => {

        selections.includes(e.target.value) ? setSelections(selections.filter(selection => selection !== e.target.value)) : setSelections([...selections, e.target.value])
    }

    return (
        <>
            {choices.map((option, i: number) => {
                return (
                    <>
                        <fieldset key={`fieldset-${i}`} >
                            <label htmlFor={option.value}>{option.value}</label>
                            <input name={option.value} value={option.value} type='checkbox' onChange={updateSelections} />
                        </fieldset>
                    </>
                )

            })}
            <button onClick={() => handleAnswerClick(selections)}> {ctaText || 'Next'}</button >
        </>

    )
}