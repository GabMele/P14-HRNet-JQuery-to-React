// src/components/StateSelect.js

import states from "@/data/states.json";

const StateSelect = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} required>
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
