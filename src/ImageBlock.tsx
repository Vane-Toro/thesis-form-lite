import React from "react";


interface Props {
    source: string,
    imageAlt?: string,
}

export const ImageBlock = ({ source, imageAlt }: Props) => {
    return (
        <div className="image-block">
            <img src={source} alt={imageAlt} />
        </div>
    )
}

