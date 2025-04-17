import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "@/features/employeesSlice";
import states from "@/data/states.json";
import departments from "@/data/departments.json";
import SelectOption from "./SelectOption";
import DatePicker from "./DatePicker";
//import Modal from "./Modal";
import { Modal } from "@gabmele/react-modal";
import styles from "./EmployeeForm.module.scss";


const EmployeeForm = () => {
  const dispatch = useDispatch();
  //const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(form));
    setIsModalOpen(true);

    setForm({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: ""
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
            onChange={(selectedDate) => setForm((prev) => ({ ...prev, dateOfBirth: selectedDate }))}
          />
          <label htmlFor="dateOfBirth">Date of Birth</label>
        </div>

        <div className={styles.inputWrapper}>
          <DatePicker
            value={form.startDate}
            onChange={(selectedDate) => setForm((prev) => ({ ...prev, startDate: selectedDate  }))}
          />
          <label htmlFor="startDate">Start Date</label>
        </div>

        <fieldset className={styles.address}>
          <legend>Address</legend>

          {renderInputField("street", "Street", "text", true)}
          {renderInputField("city", "City", "text", true)}

          <div className={styles.inputWrapper}>
            <SelectOption
              options={states}
              value={form.state}
              onChange={(selectedState) => 
                setForm((prev) => ({ ...prev, state:selectedState  }))}
              label="State"
              keyField="abbreviation"
              valueField="name"
            />
            <label htmlFor="state">State</label>
          </div>

          {renderInputField("zipCode", "Zip Code", "text", true)}

        </fieldset>

        <div className={styles.inputWrapper}>
            <SelectOption
              options={departments}
              value={form.department} 
              onChange={(selectedDepartment) => setForm((prev) => 
                ({ ...prev, department: selectedDepartment }))}
              label="Department"
              keyField="abbreviation"
              valueField="name"
            />
          </div>

        <button type="submit">Save Employee</button>
      </form>
{/* 
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <p>Employee Created!</p>
      </Modal> */}

      {isModalOpen && (
  <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
    <p>Employee Created!</p>
  </Modal>
)}


    </div>
  );
};

export default EmployeeForm;
