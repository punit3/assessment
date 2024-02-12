
import React, { useRef, useState } from "react";
import useCounter from "../hooks/useCounter"; 
import styles from "./CounterStyles.module.css"; 


const CounterApp = () => {
  // Initialising values from the custom hook useCounter
  const { count, inputValue, handleAdd, handleSubtract, setInputValue } =
    useCounter();

  // State for managing the history of actions and handling errors
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');


  // Using useRef to hold the current value of the counter
  const countRef = useRef(count);

  // Update countRef when the count value changes
  countRef.current = count;

  // Function to update the history based on the performed action
  const updateHistory = (action) => {
    setHistory([
      ...history,
      `${action.type.charAt(0).toUpperCase() + action.type.slice(1)}ed ${
        action.value
      }`,
    ]);
  };

  // Function to handle the click event for the "Add" button
  const handleAddClick = () => {
    if (inputValue === "") {
      setError("Input cannot be empty");
    } else {
      setError("");
      updateHistory(handleAdd());
    }
  };

  // Function to handle the click event for the "Subtract" button
  const handleSubtractClick = () => {
    if (inputValue === "") {
      setError("Input cannot be empty");
    } else {
      setError("");
      updateHistory(handleSubtract());
    }
  };

 
  return (
    <div>
      {/* Counter container */}
      <div className={styles.container}>
        <h1 className={styles.title}>Counter App</h1>
        {/* Use countRef.current to get the latest count value */}
        <p className={styles.count}>Count: {countRef.current}</p>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.input}
        />
        {/* Displaying error message if input is empty */}
        {error && <p className={styles.error}>{error}</p>}
        {/* Button container for "Add" and "Subtract" actions */}
        <div className={styles.buttonsContainer}>
          <button
            onClick={handleSubtractClick}
            className={`${styles.button} ${styles.btn_sub}`}
          >
            Subtract
          </button>
          <button
            onClick={handleAddClick}
            className={`${styles.button} ${styles.btn_add}`}
          >
            Add
          </button>
        </div>
      </div>

      {/* History container */}
      <div className={styles.historyContainer}>
        <h2 className={styles.historyTitle}>History</h2>
        {/* Displaying a list of historical actions */}
        <ul className={styles.historyList}>
          {history.map((item, index) => (
            <li key={index} className={styles.historyItem}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default CounterApp;
