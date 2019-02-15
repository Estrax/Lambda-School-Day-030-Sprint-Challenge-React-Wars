# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a library to build rich user interfaces. It is focused on making the development and maintenance processes easy, fast and simple - that's why it promotes the use of reusable components. React allows to handle interactions without the need to reload the whole page by using the Virtual DOM. It re-renders the parts of the page that change.

2.  What does it mean to _think_ in react?

To think in react is to apply the knowledge about how is the Virtual DOM working, how to break the UI into smaller (reusable) components, what are the components lifecycle methods and how does the data flow (props, state) look like - in the development process - to make it as smooth as it can be.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

The biggest differences between Class and Presentational components are:
- `presentational` component is similar to the pure function in JS - it only returns DOM elements while the `class` component does more things,
- `class` component can mutate the state inside of it while the `presentational` component can not (however it still has the state calculated, but cannot modify it),
- `class` component can use many lifecycle methods while the `presentational` component have only the render method

4.  Describe state.

State is an object that determines how the component renders and behaves, so it allows to create dynamic and interactive components.

5.  Describe props.

Props is an object that determines what objects (variables, sequences, functions) are going to be passed to the component. It allows to make components reusable - so with one specification of a component, it can be rendered multiple times with different data.