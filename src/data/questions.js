// src/data/questions.js

const questions = [
  {
    question: 'What is React?',
    options: [
      'A JavaScript library for building user interfaces',
      'A programming language',
      'A database management system',
      'A web server',
    ],
    answer: 'A JavaScript library for building user interfaces',
  },
  {
    question: 'Who developed React?',
    options: ['Google', 'Facebook', 'Microsoft', 'Amazon'],
    answer: 'Facebook',
  },
  {
    question: 'What is the purpose of JSX in React?',
    options: [
      'To write CSS styles',
      'To write HTML templates',
      'To write XML documents',
      'To write JavaScript code',
    ],
    answer: 'To write HTML templates',
  },
  {
    question:
      'Which of the following is used to manage state in a functional component?',
    options: ['setState', 'useState', 'this.state', 'componentDidMount'],
    answer: 'useState',
  },
  {
    question: 'How do you create a component in React?',
    options: [
      'Using a function or a class',
      'Using an array',
      'Using an object',
      'Using a string',
    ],
    answer: 'Using a function or a class',
  },
  {
    question: 'What is the significance of keys in React?',
    options: [
      'They help identify elements uniquely',
      'They bind event handlers',
      'They initialize state',
      'They manage lifecycle methods',
    ],
    answer: 'They help identify elements uniquely',
  },
  {
    question:
      'Which method is used to update the state in a React class component?',
    options: ['setState()', 'updateState()', 'changeState()', 'modifyState()'],
    answer: 'setState()',
  },
  {
    question: "What does the term 'lifting state up' refer to in React?",
    options: [
      'Moving state to a higher component in the hierarchy',
      'Moving state to a lower component in the hierarchy',
      'Copying state between components',
      'Deleting state from a component',
    ],
    answer: 'Moving state to a higher component in the hierarchy',
  },
  {
    question:
      'Which hook would you use to perform side effects in a functional component?',
    options: ['useEffect', 'useSideEffect', 'useReducer', 'useState'],
    answer: 'useEffect',
  },
  {
    question:
      'How do you pass data from a parent component to a child component?',
    options: ['Using state', 'Using props', 'Using context', 'Using hooks'],
    answer: 'Using props',
  },
];

export default questions;
