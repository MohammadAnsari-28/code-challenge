# Code Challenge:

## Introduction:
Welcome to the React Developer Technical Assessment! This test is designed to evaluate your proficiency in building React applications using a modern stack, including Redux Toolkit, Vite, React Router and TurboRepo. We have prepared a set of tasks and questions that cover a spectrum of skills, ranging from fundamental concepts to more advanced topics.

### Tasks: 
Complete the provided tasks to demonstrate your ability to work with React, Redux Toolkit, Vite, and TurboRepo. Adjust the complexity based on your experience level.

### Questions:
Answer the questions to showcase your understanding of the underlying concepts and best practices associated with the technologies in use.

### Time Limit:
This assessment is designed to take approximately 1 hour to complete. Please manage your time effectively.

### Setup the reporsitory:
Make sure you have pnpm installed<br>
Install dependencies with `pnpm`<br>
Run the project with `turbo run dev` or `pnpm run dev`

### prerequisite:
Start the test by Forking this repository, and complete the following tasks:<br>

## Task 1:
Assignment: Use the `api` found in `App.tsx` to make a request and fetch a list of all Pokémon.<br>
Question 1: How did you manage to fetch the list and what tool did you use?<br>
Answer: Created a custome hook(useFetchApi) and used 'fetch' javascript inbuild method to fetch api.<br>
Question 2: What steps would you take to future improve this?<br>
Answer: We can use any open sourse libraries like React Query or axios or we can move this to redux middleware like saga and thunk. And with the help of redux-toolkit we can use creatAsynThunk and we can use the same fecth api inside.<br>

commit the code as `task-1`<br>

## Task 2:
Assignment: Parse the list to the `<List />` component and ajust the component to show a list of all pokémon names
Feel free to create more components in the `/ui` package or in the app if needed 

commit the code as `task-2`<br>

## Task 3:
Assignment: Style the `<List />` component to display as a grid.

commit the code as `task-3`<br>

## Task 4:
Assignment: Introduce `redux-toolkit` and store the list of pokémon in the redux store.<br>
Question 4: What makes the `createSlice` in redux-toolkit difference then A Reducer in redux?<br>
Answer: `createSlice` significantly reduces the boilerplate code compared to traditional reducers.
Actions are created automatically. It's has built in middleware to perform async task. And it's uses
immer internally for immutable state.<br>
Question 5: Describe the benefits of immutable code.<br>
Answer: Because of immuatble code, the code is more predictable, reliable, and maintainable. So we can
easly debug or track reducers and state updation 

commit the code as `task-4`<br>

## Task 5:
Assignment: Create button for each pokémon where an Action will be dispatched to remove the pokémon from the store 
Question 6: How can you verify the action has been dispatched?<br>
Answer: We can React devtool to track any state updation as state tree, action and dispatches. And also in install redux-logger middleware to track the state tree, actions and dispatch methods

## Task 6:
Question 7: explain the use of `useEffect` hook in React<br>
Answer: To perform side effect in functional components, like updating or changing the dom or call api's and cleaning the functions when component unmount<bt>
Question 8: What is A High Order Component?<br>
Answer: It is a function that takes a component and returns a new component with enhanced common functionality
Question 9: What use cases would a HOC be usefull?
Answer: When ever we want to reuse some function and want to access those functionality in more than one component that time HOC will be usefull<br>
Question 10: What does it indicate when a component is prefixed with `use` and `with`<br>
`use` defines hook to functional component. Hook are use `use` as prefix and `with` define HOC and it's start with `with`. <br>
Question 11: What is a Generic type in typescript?<br>
Answer: Typescript allows us with different data types of javascript for safe checking of those data types.<br>
Question 12: Whats the difference between a controlled and uncontrolled input in React?<br>
Answer: Controlled input is an element whose value is controlled by React state.
An uncontrolled input is an input that maintains its own internal state. We use a `ref` to access the DOM element's value directly.





