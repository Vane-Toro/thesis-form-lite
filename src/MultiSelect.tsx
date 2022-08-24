import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLInputElement> {
    options: string[],
}

export const MultiSelect = ({ options }: Props) => {
    return (
        <>
            {options.map((option: string, i: number) => {
                return (
                    <>
                        <label key={`label-${i}`} htmlFor={option}>{option}</label>
                        <input key={`input-${i}`} name={option} value={option} type='checkbox' />
                    </>
                )

            })}
        </>

    )
}