import React, { ReactNode } from 'react';
import { QuestionContextProvider } from './QuestionContext'
interface Props {
    children: ReactNode,
    ctaText: string
}




export const TFL = ({ children }: Props) => {


    return (
        <QuestionContextProvider>

            <>

                <div className="tfl-wrapper" >
                    {children}

                </div>
            </>
        </QuestionContextProvider>

    )
}



