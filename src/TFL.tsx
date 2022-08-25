import React, { useState, ReactNode, ReactComponentElement } from 'react';
import { Button } from './Button';
interface Props {
    children: ReactNode,
    ctaText: string
}


export const TFL = ({ children, ctaText }: Props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    console.log(children);




    return (
        <div className="tfl-wrapper" >
            {children}
            {/* {children.type === 'button' && <Button as=onClick={() => setCurrentQuestion(currentQuestion + 1)} ctaText={ctaText} />} */}

        </div>
    )
}



