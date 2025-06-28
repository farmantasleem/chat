import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

const Navigation = () => {

  return (
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  );
};

export default Navigation;
