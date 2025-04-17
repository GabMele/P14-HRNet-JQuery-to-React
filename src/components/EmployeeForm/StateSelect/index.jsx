// src/components/StateSelect.js

import states from "@/data/states.json";

const StateSelect = ({ value, onChange, required = true }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value; // Extract the value from the event
    onChange(selectedValue); // Pass the value to the parent
  };

  return (
    <select value={value || ""} onChange={handleChange} required={required}>
      <option value="" disabled>Select a state</option>
      {states.map((state) => (
        <option key={state.abbreviation} value={state.abbreviation}>
          {state.name}
        </option>
      ))}
    </select>
  );
};

export default StateSelect;
