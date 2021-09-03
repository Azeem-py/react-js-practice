import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("Done");

    //this is a cleanup function and how to add it
    // return () => {
    //   window.removeEventListener("resize", checkSize);
    // };

    //the cleanup function above is a good practice but however we can decide to use an empty array
    //as a second parameter but cleaning up is a good practice
  }, []);
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
