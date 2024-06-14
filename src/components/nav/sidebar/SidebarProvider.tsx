import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const SidebarProvider = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='ml-[16.5rem] m-2'>
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarProvider;
