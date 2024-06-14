import { Button, type ButtonProps } from '@/components/ui/button';
import { NavigateOptions, useNavigate } from 'react-router-dom';

export interface NavItemProps extends ButtonProps {
  text: string;
  to: string;
}

const NavItem = ({ text, to, ...props }: NavItemProps) => {
  const navigate = useNavigate();

  const navigateView = (to: string, options?: NavigateOptions) => {
    if (!document.startViewTransition) {
      return navigate(to, options);
    } else {
      return document.startViewTransition(() => {
        navigate(to, options);
      });
    }
  };

  return (
    <li>
      <Button variant='ghost' {...props} onClick={() => navigateView(to)}>
        {text}
      </Button>
    </li>
  );
};

export default NavItem;
