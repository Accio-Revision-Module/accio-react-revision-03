/* eslint-disable react/prop-types */

import { memo } from "react";

export const MemoizedChildComponent = memo(ChildComponent);

function ChildComponent({ number }) {
  console.log("Child component rendered");
  return <div>ChildComponent, number: {number}</div>;
}

export default ChildComponent;
