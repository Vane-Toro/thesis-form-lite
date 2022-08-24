import React from "react";

interface Props {
    kicker?: String,
    title?: String,
    text?: String
}

export const TitleBlock = ({ kicker, title, text }: Props) => {
    return (
        <div className="title-block">
            <h6>{kicker}</h6>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}