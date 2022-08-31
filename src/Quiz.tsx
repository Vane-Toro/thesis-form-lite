import React, { useEffect, useReducer } from 'react'

const quizReducer = (state, action) => {
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

const Question = ({ state, dispatch }) => {
    let question = state.questions[state.answers.length]

    const handleAnswerClick = (choice) => {
        dispatch({ type: 'answer', payload: choice.value })
    }

    if (!question) { return <p>No questions</p> }

    return (
        <div>
            <p>{question.text}</p>
            <ul>
                {question.choices.map((choice) => {
                    return (
                        <li key={choice.value}>
                            <button onClick={() => handleAnswerClick(choice)}>
                                {choice.value}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const CustomQuestion = ({ state, dispatch }) => {
    let question = state.questions[state.answers.length]

    const handleAnswerClick = (choice) => {
        dispatch({ type: 'answer', payload: choice.value })
    }
    return (
        <>
            <div>Custom Question</div>
            <ul>
                {question.choices.map((choice) => {
                    return (
                        <li key={choice.value}>
                            <button onClick={() => handleAnswerClick(choice)}>
                                {choice.value}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

const Results = ({ state, dispatch }) => {
    let answers = state.answers

    return (
        <div>{JSON.stringify(state)}</div>

    )
}

const ComponentMap = {
    SingleSelect: Question,
    MultiSelect: CustomQuestion,
}

const DynamicComponent = ({ question, state, dispatch }) => {
    // console.log(['state', state, 'question', question]);


    if (typeof ComponentMap[question.type] !== 'undefined') {
        return React.createElement(ComponentMap[question.type], {
            state: state,
            dispatch: dispatch,

        })
    }
}

const Quiz = ({ initialQuizState }: any) => {
    let [state, dispatch] = useReducer(quizReducer, initialQuizState)
    // console.log(state);

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
