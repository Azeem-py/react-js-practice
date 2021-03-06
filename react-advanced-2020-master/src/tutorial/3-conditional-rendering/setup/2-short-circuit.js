import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}

      {/* short circuit operator */}
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}

      {/* tenary operator */}
      {isError ? <h1>There is an Error</h1> : <h1>There is no error</h1>}
    </>
  );
};

export default ShortCircuit;
