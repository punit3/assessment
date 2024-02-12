// src/hooks/useCounter.js
import { useState } from 'react';

const useCounter = () => {
  // State for count and input value
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // Function to handle addition operation
  const handleAdd = () => {
    const value = parseInt(inputValue, 10) || 0;
    const newCount = count + value;
    setCount(newCount);
    setInputValue('');
    // Return an action object for history tracking
    return { type: 'add', value };
  };

  // Function to handle subtraction operation
  const handleSubtract = () => {
    const value = parseInt(inputValue, 10) || 0;
    const newCount = count - value;
    setCount(newCount);
    setInputValue('');
    // Return an action object for history tracking
    return { type: 'subtract', value };
  };

  // Return state and functions
  return {
    count,
    inputValue,
    handleAdd,
    handleSubtract,
    setInputValue,
  };
};

export default useCounter;
