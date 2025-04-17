// src/components/StateSelect.js


const SelectOption = ({ options, value, onChange, 
    label, keyField, valueField, required = true }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value; // Extract the value from the event
    onChange(selectedValue); // Pass the value to the parent
  };

  return (
    <select value={value || ""} onChange={handleChange} required={required}>
      <option value="" disabled>
        Select a {label}
      </option>
      {options.map((option) => (
        <option key={option[keyField]} value={option[valueField]}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
