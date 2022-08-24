import React, { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    ctaText: string;
}

export const Button = ({ ctaText }: Props) => {
    return (
        <button>{ctaText}</button>

    )
}