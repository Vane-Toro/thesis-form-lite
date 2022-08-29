import React, { useContext, useState } from 'react';
type QuestionContextProviderProps = {
    children: React.ReactNode
}

export const QuestionContext = React.createContext()
export const QuestionUpdateContext = React.createContext()

export const useQuestionContext = () => {
    return useContext(QuestionContext)
}

export const useQuestionUpdateContext = () => {
    return useContext(QuestionUpdateContext)
}



export const QuestionContextProvider = ({ children }: QuestionContextProviderProps) => {
    const [currentQuestion, setCurrentQuestion] = useState(1)

    const updateCurrentQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
    }



    return (
        <QuestionContext.Provider value={currentQuestion}>
            <QuestionUpdateContext.Provider value={updateCurrentQuestion}>

                {children}
            </QuestionUpdateContext.Provider>
        </QuestionContext.Provider>
    )
}

