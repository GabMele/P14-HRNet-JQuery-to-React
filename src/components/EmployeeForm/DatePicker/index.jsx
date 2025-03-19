// src/components/DatePicker.js
// const DatePicker = ({ value, onChange }) => {
//   return <input type="date" value={value} onChange={onChange} required />;
// };

// export default DatePicker;


const DatePicker = ({ value, onChange }) => {
  const handleChange = (e) => {
    const newDate = e.target.value; // This is already in "YYYY-MM-DD"
    onChange(newDate); // Pass the formatted date
  };

  return <input type="date" value={value || ""} onChange={handleChange} required />;
};

export default DatePicker;
