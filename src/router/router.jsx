import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import EmployeesListPage from '@/pages/EmployeesListPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employeeslistpage" element={<EmployeesListPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
