// src/components/DatePicker.js
// const DatePicker = ({ value, onChange }) => {
//   return <input type="date" value={value} onChange={onChange} required />;
// };

// export default DatePicker;


const DatePicker = ({ value, onChange, id }) => {
  const handleChange = (e) => {
    const newDate = e.target.value; // This is already in "YYYY-MM-DD"
    onChange(newDate); // Pass the formatted date
  };

  return (
    <input 
      id={id}
      type="date" 
      value={value || ""} 
      onChange={handleChange}
      min="0000-01-01"
      max={new Date().toISOString().split("T")[0]} // Example: Maximum date (today)
      required />
)};

export default DatePicker;
