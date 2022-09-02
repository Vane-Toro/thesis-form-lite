import React, { useEffect, useReducer } from 'react'
import { Question } from './Question'
import { questionTypes } from './types'

type stateTypes = {
    step: number,
    answers: string[],
    questions: questionTypes[],
}

type actionTypes = {
    payload: string,
    type: string,
}

const quizReducer = (state: stateTypes, action: actionTypes) => {
    switch (action.type) {
        case 'answer':
            const answers = [...state.answers, action.payload]
            const step = state.step + 1
            return { ...state, answers, step }
        case 'set_state':
            return action.payload
        default:
            throw new Error('Unexpected error')
    }
}

const ComponentMap: { [key: string]: React.ComponentType<any> } = {
    SingleSelect: Question,
    MultiSelect: Question,
    // Custom: CustomQuestion,
    // Interstitial: Interstitial
}

interface DynamicComponentProps {
    question: questionTypes,
    state: stateTypes,
    dispatch: React.Dispatch<any>
}


const DynamicComponent = (props: DynamicComponentProps) => {
    const { question, state, dispatch } = props

    return React.createElement(ComponentMap[question.type], {
        question: question,
        state: state,
        dispatch: dispatch,

    })
}

interface quizPropTypes {
    step: number,
    questions: questionTypes[],
    answers: string[],
}


const Quiz = (initialQuizState: quizPropTypes) => {
    let [state, dispatch] = useReducer<object, object>(quizReducer, initialQuizState)

    useEffect(() => {
        // console.log('Pull in initial quiz state and set it')
        dispatch({ type: 'set_state', payload: initialQuizState })
    }, [initialQuizState])

    return (
        <div>
            {
                state.answers.length < 3
                    ? <DynamicComponent question={state.questions[state.step]} state={state} dispatch={dispatch} />
                    : <Results state={state} dispatch={dispatch} />
            }
        </div>
    )
}

export default Quiz





// const CustomQuestion = ({ state, dispatch }) => {
//     let question = state.questions[state.answers.length]

//     const handleAnswerClick = (choice) => {
//         dispatch({ type: 'answer', payload: choice.value })
//     }
//     return (
//         <>
//             <div>Custom Question</div>
//             <ul>
//                 {question.choices.map((choice) => {
//                     return (
//                         <li key={choice.value}>
//                             <button onClick={() => handleAnswerClick(choice)}>
//                                 {choice.value}
//                             </button>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </>
//     )
// }

// const Results = ({ state, dispatch }) => {
//     let answers = state.answers

//     return (
//         <div>{JSON.stringify(state)}</div>

//     )
// }

// const Interstitial = ({ state, dispatch }) => {
//     return (
//         <div>
//             <div>Interstitial</div>
//             <TitleBlock title='title' />
//             <button onClick={() => dispatch({ type: 'answer', payload: 'interstitial' })}>
//                 Reset
//             </button>
//         </div>
//     )
// }
