import { Outlet } from 'react-router-dom';
import NavBar from '../nav/NavBar';

const Layout = () => {
  return (
    <NavBar>
      <Outlet />
    </NavBar>
  );
};

export default Layout;
