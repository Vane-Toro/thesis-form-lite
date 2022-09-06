import React, { HTMLAttributes, useState, ChangeEvent } from 'react';
import { questionTypes } from './types';

interface Props extends HTMLAttributes<HTMLInputElement> {
    options: questionTypes["options"],
    ctaText?: string,
    handleAnswerClick: Function,
}





export const MultiSelect = ({ options, ctaText, handleAnswerClick }: Props) => {
    const [selections, setSelections] = useState<String[]>([]);

    const updateSelections = (e: ChangeEvent<HTMLInputElement>) => {

        selections.includes(e.target.value) ? setSelections(selections.filter(selection => selection !== e.target.value)) : setSelections([...selections, e.target.value])
    }

    return (
        <>
            {options.map((option, i: number) => {
                return (
                    <>
                        <fieldset key={`fieldset-${i}`} >
                            {option.image && <img src={option.image} alt={option.imageAlt} />}
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