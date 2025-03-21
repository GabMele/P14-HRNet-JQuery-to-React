import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
