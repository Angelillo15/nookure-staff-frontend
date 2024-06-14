import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import NavItem, { NavItemProps } from '@/components/nav/NavItem';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Bars from '@/components/icons/Bars';

interface Props {
  navItems: NavItemProps[];
}

const NavSheet = ({ navItems }: Props) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const isSheetOpenRef = useRef(isSheetOpen);
  const location = useLocation();

  useEffect(() => {
    isSheetOpenRef.current = isSheetOpen;
  }, [isSheetOpen]);

  useEffect(() => {
    if (isSheetOpenRef.current) {
      setIsSheetOpen(false);
    }
  }, [location]);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost'><Bars /></Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ul>
          {navItems.map((item, index) => (
            <NavItem key={index} to={item.to} text={item.text} />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
