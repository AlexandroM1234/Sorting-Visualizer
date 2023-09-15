import React, { useEffect, useState } from "react";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [bars, setBars] = useState(300);

  // generate a random int between min and max numbers
  const randomIntFromIntervals = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Generate a new array of values every inital render of the page
  const resetArray = () => {
    const array = [];
    // the number of bars can be changed by a slider and state
    for (let i = 0; i < bars; i++) {
      // largest number is base off the window height to reduce the need for scrolling
      array.push(randomIntFromIntervals(5, window.innerHeight));
    }
    setArray(array);
  };

  useEffect(() => {
    resetArray();
  }, []);

  return (
    <div className="array-container">
      {array.map((val, idx) => (
        <div
          className="array-bar"
          key={idx}
          // the height of the bar is based off of the value in pixels
          style={{ height: `${val}px` }}
        ></div>
      ))}
    </div>
  );
};

export default SortingVisualizer;
