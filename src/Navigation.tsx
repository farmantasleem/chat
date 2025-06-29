import { Route, Routes } from 'react-router-dom';
import { Feed } from './pages/Feed';
import { Account } from './pages/Account';

const Navigation = () => {

  return (
    <Routes>
      <Route index element={<Feed />} />
      <Route path="/account" element={<Account/>} />
    </Routes>
  );
};

export default Navigation;
