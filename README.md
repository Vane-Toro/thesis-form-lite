# Thesis-Form-Lite

A lighter version of Thesis Form built in React.

## Installation

**Add the following code to the page where you quiz will run.**

```jsx
const quizReducer = (state, action) => {
  switch (action.type) {
    case 'answer':
      const answers = [...state.answers, action.payload];
      const step = state.step + 1;
      return { ...state, answers, step };
    case 'set_state':
      return action.payload;
    default:
      throw new Error('Unexpected error');
  }
};

const ComponentMap = {
  SingleSelect: Question,
  MultiSelect: Question,
  // Custom: CustomQuestion, you can add any key/value pair for custom components
  // Interstitial: Interstitial,
};

const DynamicComponent = props => {
  const { question, state, dispatch } = props;

  return React.createElement(ComponentMap[question.type], {
    question: question,
    state: state,
    dispatch: dispatch,
  });
};

const Quiz = ({ initialQuizState }) => {
  let [state, dispatch] = useReducer(quizReducer, initialQuizState);

  useEffect(() => {
    // console.log('Pull in initial quiz state and set it')
    dispatch({ type: 'set_state', payload: state });
  }, [initialQuizState]);

  return (
    <div>
      {state.answers.length < state.questions.length ? (
        <DynamicComponent
          question={state.questions[state.step]}
          state={state}
          dispatch={dispatch}
        />
      ) : (
        <Results state={state} dispatch={dispatch} />
      )}
    </div>
  );
};
```

In a separate file create the quiz state. Below is an example of what it should include.

```js
const initialQuizState = {
  step: 0,
  questions: [
    {
      id: 1,
      type: 'MultiSelect',
      title: 'Single Select Question',
      text: 'Here is some text',
      image:
        'https://uploads-ssl.webflow.com/5f8efd7611c46166adb2f1aa/60259f77e5d4f1879bc98285_Combined.svg',
      options: [{ value: 'First choice' }, { value: 'Second choice' }],
    },
    {
      id: 2,
      type: 'SingleSelect',
      title: 'Second question',
      ctaText: 'Next question',
      options: [
        { value: 'First choice second' },
        { value: 'Second choice second' },
      ],
    },
    {
      id: 3,
      type: 'MultiSelect',
      text: 'Third question',
      ctaText: 'Next question',
      options: [
        { value: 'First choice third' },
        { value: 'Second choice third' },
        { value: 'Third choice third' },
      ],
    },
    {
      id: 4,
      type: 'MultiSelect',
      text: 'Third question',
      ctaText: 'Next question',
      options: [
        { value: 'First choice fourth' },
        { value: 'Second choice fourth' },
        { value: 'Third choice fourth' },
      ],
    },
  ],
  answers: [],
};
```

Now you should be able to import the Question component and start building out a quiz!

### [TSDX & Storybook Documentation](/docs/general/tsdx.md)
