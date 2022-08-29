import React, { HTMLAttributes } from "react";
import { useQuestionUpdateContext } from './QuestionContext'
interface Props extends HTMLAttributes<HTMLButtonElement> {
    ctaText: string;

}

export const Button = ({ ctaText }: Props) => {
    const updateCurrentQuestion = useQuestionUpdateContext()

    return <button onClick={updateCurrentQuestion}> {ctaText}</button >
}