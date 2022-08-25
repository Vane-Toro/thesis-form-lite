import React, { HTMLAttributes, } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
    options: string[],
    questionNumber: number
}

export const SingleSelect = ({ options, questionNumber }: Props) => {
    return (
        <>

            {
                options.map((option: string, i: number) => {
                    return (
                        <>
                            <label key={`label-${i}`} htmlFor={option}>{option}</label>
                            <input key={`input-${i}`} value={option} type='radio' name={`${questionNumber}`} />
                        </>
                    )

                })
            }

        </>
    )


}