export default [
    {
        id: 'q1',
        text: 'Which of the following definitions best describes React.js?',
        answers: [
            'A library to build user interfaces with help of declarative code.',
            'A library for managing state in web applications.',
            'A framework to build user interfaces with help of imperative code.',
            'A library used for building mobile applications only.',
        ],
    },
    {
        id: 'q2',
        text: 'What purpose do React hooks serve?',
        answers: [
            'Enabling the use of state and other React features in functional components.',
            'Creating responsive layouts in React applications.',
            'Handling errors within the application.',
            'Part of the Redux library for managing global state.',
        ],
    },
    {
        id: 'q3',
        text: 'Can you identify what JSX is?',
        answers: [
            'A JavaScript extension that adds HTML-like syntax to JavaScript.',
            'A JavaScript library for building dynamic user interfaces.',
            'A specific HTML version that was explicitly created for React.',
            'A tool for making HTTP requests in a React application.',
        ],
    },
    {
        id: 'q4',
        text: 'What is the most common way to create a component in React?',
        answers: [
            'By defining a JavaScript function that returns a renderable value.',
            'By defining a custom HTML tag in JavaScript.',
            'By creating a file with a .jsx extension.',
            'By using the "new" keyword followed by the component name.',
        ],
    },
    {
        id: 'q5',
        text: 'What does the term "React state" imply?',
        answers: [
            'An object in a component that holds values and may cause the component to render on change.',
            'The lifecycle phase a React component is in.',
            'The overall status of a React application, including all props and components.',
            'A library for managing global state in React applications.',
        ],
    },
    {
        id: 'q6',
        text: 'How do you typically render list content in React apps?',
        answers: [
            'By using the map() method to iterate over an array of data and returning JSX.',
            'By using the for() loop to iterate over an array of data and returning JSX.',
            'By using the forEach() method to iterate over an array of data and returning JSX.',
            'By using the loop() method to iterate over an array of data and returning JSX.',
        ],
    },
    {
        id: 'q7',
        text: 'Which approach can NOT be used to render content conditionally?',
        answers: [
            'Using a the #if template syntax.',
            'Using a ternary operator.',
            'Using the && operator.',
            'Using an if-else statement.',
        ],
    },
    {
        id: 'q8',
        text: 'What is the purpose of the `useEffect` hook in React?',
        answers: [
            'To perform side effects in functional components.',
            'To update the state in class components.',
            'To handle form validation in React applications.',
            'To manage global state across multiple components.',
        ],
    },
    {
        id: 'q9',
        text: 'What is the key property used for in a list of React elements?',
        answers: [
            'To help React identify which items have changed, are added, or removed.',
            'To add a unique style to each list item.',
            'To set the ID of each list item in the DOM.',
            'To control the order of elements in the array.',
        ],
    },
    {
        id: 'q10',
        text: 'Which React hook would you use to keep a value between renders without causing a re-render when it changes?',
        answers: [
            'useRef',
            'useState',
            'useEffect',
            'useMemo',
        ],
    },
    {
        id: 'q11',
        text: 'Which of the following is true about React Context API?',
        answers: [
            'It allows you to share state between components without passing props.',
            'It is a third-party library used to manage global state.',
            'It only works with class components.',
            'It replaces Redux as the recommended way to manage state.',
        ],
    },
];