/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function CallbackChild({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
  }, [getItems]);

  return (
    <div>
      CallbackChild
      {items.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
}

export default CallbackChild;
