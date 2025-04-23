// src/components/EmployeesList/index.jsx

import { useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import styles from "./EmployeesTable.module.scss";


const EmployeesTable = () => {

  const employees = useSelector(state => state.employees.employeesList);

  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  const columns = [
    { name: "First Name", selector: row => row.firstName, sortable: true },
    { name: "Last Name", selector: row => row.lastName, sortable: true },
    { name: "Start Date", selector: row => row.startDate, sortable: true },
    { name: "Department", selector: row => row.department, sortable: true },
    { name: "Date of Birth", selector: row => row.dateOfBirth, sortable: true },
    { name: "Street", selector: row => row.street, sortable: true },
    { name: "City", selector: row => row.city, sortable: true },
    { name: "State", selector: row => row.state, sortable: true },
    { name: "Zip Code", selector: row => row.zipCode, sortable: true },
  ];

  return (
    <div>
      {employees.length > 0 && (
      <div className={styles.search}>
        <span>Search:</span>
        <input
          type="text"
          placeholder="Search by any field"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      )}

      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination
        highlightOnHover
        defaultSortFieldId={1} // Set default sorting on the first column (First Name)
      />
    </div>
  );
};

export default EmployeesTable;
