import { NavItemProps } from '@/components/nav/NavItem';
import NavItem from '@/components/nav/NavItem';
import BuyPluginDialog from '@/components/nav/BuyPluginDialog';
import NavSheet from './NavSheet';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const items = [
  {
    text: 'Home',
    to: '/',
    variant: 'default',
  },
  {
    text: 'About',
    to: '/about',
  },
] as NavItemProps[];

const NavBar = ({ children }: Props) => {
  const location = useLocation();
  if (location.pathname.includes('/editor')) {
    return <>{children}</>;
  }

  return (
    <>
      <nav>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <ul className='hidden sm:flex sm:flex-row'>
              {items.map((item, index) => (
                <NavItem className='mx-2' key={index} {...item} />
              ))}
            </ul>
            <ul className='sm:hidden'>
              <NavSheet navItems={items} />
            </ul>
            <ul>
              <li>
                <BuyPluginDialog />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default NavBar;
