import React, { useCallback, useState } from "react";
import { useMemo } from "react";

const Sanmple = () => {
  console.log("parent Rendering");

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const value = useCallback(() => {
    console.log("ghvjbjn");
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <h1> {count} </h1>

      <button onClick={increment}>Increment</button>
      <ChildComponent value={value} />
    </div>
  );
};

export default Sanmple;

const Child = ({ value }) => {
  console.log("Child rendering");

  return (
    <div>
      <h1> hbgfcghviuojpkpihj</h1>

      <h3> {value} </h3>
    </div>
  );
};

const ChildComponent = React.memo(Child);
