import { useState } from "react";
import { MemoizedChildComponent } from "./ChildComponent";

function ParentComponent() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  const handleClick = () => {
    setNumber((prev) => prev + 1);
  };

  console.log("Parent component rendered");

  return (
    <div>
      ParentComponent
      <div>
        <div>
          <button onClick={handleClick}>Update Number</button>
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a name"
        />
        <MemoizedChildComponent number={number} />
      </div>
    </div>
  );
}

export default ParentComponent;
