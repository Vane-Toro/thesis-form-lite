import React, { HTMLAttributes, useState, ChangeEvent } from 'react';
import { QuestionTypes } from './types';

interface Props extends HTMLAttributes<HTMLInputElement> {
    options: QuestionTypes["options"],
    ctaText?: string,
    handleAnswerClick: Function,
}


type CheckboxValuesType = {
    [key: string]: boolean
}


export const MultiSelect = ({ options, ctaText, handleAnswerClick }: Props) => {
    const createCheckboxObject = () => {
        const checkboxObject: CheckboxValuesType = {};
        options.forEach((option) => {
            checkboxObject[option.value] = false;
        });
        return checkboxObject;
    }

    const checkboxValues: CheckboxValuesType = createCheckboxObject();

    const [selections, setSelections] = useState<String[]>([]);
    const [checkboxes, setCheckboxes] = useState<CheckboxValuesType>(checkboxValues);

    const updateSelections = (e: ChangeEvent<HTMLInputElement>) => {
        // Add or remove the value from the selections array
        selections.includes(e.target.value) ? setSelections(selections.filter(selection => selection !== e.target.value)) : setSelections([...selections, e.target.value])
        // Update the checkboxValues object with the new value
        setCheckboxes({ ...checkboxes, [e.target.value]: e.target.checked });
    }

    const resetCheckboxes = () => {
        // Reset the checkboxes to false
        Object.keys(checkboxValues).forEach((key) => {
            checkboxValues[key] = false;
        });
    }

    const submitAnswer = () => {
        setSelections([])
        resetCheckboxes()
        handleAnswerClick(selections)
    }

    return (
        <>
            {options.map((option, i: number) => {
                return (
                    <>
                        <fieldset key={`fieldset-${i}`} >
                            {option.image && <img src={option.image} alt={option.imageAlt} />}
                            <label htmlFor={option.value}>{option.value}</label>
                            <input name={option.value} value={option.value} checked={checkboxes[option.value]} type='checkbox' onChange={updateSelections} />
                        </fieldset>
                    </>
                )

            })}
            <button onClick={submitAnswer} > {ctaText || 'Next'}</button >
        </>

    )
}