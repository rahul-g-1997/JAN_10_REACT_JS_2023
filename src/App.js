import React, { useState } from "react";
import List from "./List";

function App() {
  // Use the useState hook to manage the showHeading state
  const [showHeading, setShowHeading] = useState(true);

  const toggleShowHeading = () => {
    // Use the setShowHeading function to update the state
    setShowHeading(!showHeading);
  };

  return (
    <div className="App">
      {showHeading && <h1 className="heading">Introduction to ReactJS!</h1>}
      <button onClick={toggleShowHeading} style={{ cursor: "pointer" }}>
        {showHeading ? "Hide" : "Show"}
      </button>
      <List />
    </div>
  );
}

export default App;
