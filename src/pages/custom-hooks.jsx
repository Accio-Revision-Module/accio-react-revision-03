// import { useState } from "react";
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { usePrevious } from "../hooks/usePrevious";

function CustomHooks() {
  const [name, setName] = useLocalStorage("name", "");
  const [age, setAge] = useLocalStorage("age", "");

  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Name: {name}</p>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter name"
      />
      <p>Age: {age}</p>
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="Enter Age"
      />

      <p>Count: {count}</p>
      <p>Prev value of count: {prevCount}</p>

      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default CustomHooks;
