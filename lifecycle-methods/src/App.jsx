import React, { useEffect } from "react";

function App() {
  console.log("Component rendered");
  useEffect(() => {
    // Code to run after the component has mounted
    console.log(`Hi!!`);
    return () => {
      // Code to run before the component is unmounted
    };
  },[]); // Empty dependency array means it only runs once, similar to componentDidMount

  /* useEffect(() => {
    // Code to run after every update
  }); // No dependency array means it runs on every update */

  return <>Hello React!!!</>;
}

export default App;
