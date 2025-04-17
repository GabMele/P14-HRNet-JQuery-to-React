// src/pages/EmployeesPage/index.jsx

import EmployeesTable from "@/components/EmployeesTable";
import { Link } from "react-router-dom";

const EmployeesListPage = () => {
  return (
    <div>
      <h1>Current Employees</h1>
      <EmployeesTable />
      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeesListPage;
