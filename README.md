# ReactJS Revision Class

## Introduction to React Hooks

- Hooks are a way to use state and other React features without writing a class.
- Examples: `useState`, `useEffect`.

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## What is React Router?

- A library for routing in React applications.
- Key components: `<BrowserRouter>`, `<Routes>`, and `<Link>`.

```javascript
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>

      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Routes>
  );
}
```

## Conditional Rendering in React

- Render different components or elements based on certain conditions.
- Techniques: inline if-else, if-else blocks, logical AND (`&&`) operator.

```javascript
function Welcome({ isLogged }) {
  return isLogged ? <p>Welcome, user!</p> : <p>Please log in.</p>;
}
```

## Mapping Arrays in JSX

- Render a list of elements by mapping over an array.
- Always use a `key` prop.

```javascript
function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

## Understanding memo, useMemo, useCallback

- Techniques for memoization in React.
- `memo`: Optimizes a component's rendering.
- `useMemo`: Memoizes the result of a function.
- `useCallback`: Memoizes a callback function.

```javascript
import { memo } from "react";

const MemoizedComponent = memo(function Component({ prop }) {
  return <div>{prop}</div>;
});
```

## Custom Hooks

- Create reusable logic using custom hooks.

```javascript
function useCustomHook() {
  const [state, setState] = useState(0);
  return [state, setState];
}
```

## Introduction to Axios and API Calls

- Axios is a JavaScript library for making HTTP requests.

```javascript
import axios from "axios";

axios.get("/api/data").then((response) => {
  console.log(response.data);
});
```

## Introduction to Redux

- Redux is a state management library for JavaScript applications.
- Actions, reducers, and the store are key concepts.

```javascript
import { createStore } from "redux";

function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({ type: "INCREMENT" });
```

## Can React Hooks replace Redux? Context vs. Redux

- Hooks and context can replace Redux for some cases.
- Redux is beneficial for complex state management.
- Context API can be used for simpler global state management.

```javascript
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}
```

---
