import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "@/features/employeesSlice";
import StateSelect from "./StateSelect";
import DatePicker from "./DatePicker";
import styles from "./EmployeeForm.module.scss";

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(form));
    alert("Employee added successfully!");

    // Reset form after submission
    setForm({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      department: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    });
  };

  const renderInputField = (name, placeholder, type = "text", required = false) => (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleInputChange}
        placeholder=" "
        required={required}
      />
      <label htmlFor={name}>{placeholder}</label>
    </div>
  );

  return (
    <div className={styles.formContainer}>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        {renderInputField("firstName", "First Name", "text", true)}
        {renderInputField("lastName", "Last Name", "text", true)}

        <div className={styles.inputWrapper}>
          <DatePicker
            value={form.dateOfBirth}
            onChange={(date) => setForm((prev) => ({ ...prev, dateOfBirth: date }))}
          />
          <label htmlFor="dateOfBirth">Date of Birth</label>
        </div>

        <div className={styles.inputWrapper}>
          <DatePicker
            value={form.startDate}
            onChange={(date) => setForm((prev) => ({ ...prev, startDate: date }))}
          />
          <label htmlFor="startDate">Start Date</label>
        </div>

        {renderInputField("department", "Department", "text", true)}
        {renderInputField("street", "Street", "text", true)}
        {renderInputField("city", "City", "text", true)}

        <div className={styles.inputWrapper}>
          <StateSelect
            value={form.state}
            onChange={(state) => setForm((prev) => ({ ...prev, state }))}
          />
          <label htmlFor="state">State</label>
        </div>

        {renderInputField("zipCode", "Zip Code", "text", true)}

        <button type="submit">Save Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
