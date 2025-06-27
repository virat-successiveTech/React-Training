"use client"

import React, { useState } from 'react';

function DropDown() {
  const [selectedValue, setSelectedValue] = useState(''); // Initialize with an empty string or a default value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="my-select">Choose an option:</label>
      <select id="my-select" value={selectedValue} onChange={handleChange}>
        <option value="">--Please choose an option--</option> {/* Placeholder option */}
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>You selected: {selectedValue}</p>
    </div>
  );
}

export default DropDown;