import React, { HTMLAttributes, } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
    options: string[],
    questionNumber: string
}

export const SingleSelect = ({ options, questionNumber }: Props) => {
    return (
        <>

            {
                options.map((option: string, i: number) => {
                    return (
                        <>
                            <label htmlFor={option}>{option}</label>
                            <input key={i} value={option} type='radio' name={questionNumber} />
                        </>
                    )

                })
            }

        </>
    )


}