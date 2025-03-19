// src/pages/HomePage.js

import EmployeeForm from "@/components/EmployeeForm";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>HRNet - Home Page</h1>
      <Link to="/employees">Employee List</Link>
      <EmployeeForm />
    </>
  )
};

export default HomePage;
