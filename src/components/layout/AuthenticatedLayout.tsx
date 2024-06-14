import useEditorStorage from '@/store/editorStorage';
import OTPModal from '../modal/OTPModal';

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  const isAuthenticated = useEditorStorage(state => state.authenticated);

  return (
    <>
      {!isAuthenticated && <OTPModal />}
      {children}
    </>
  );
};

export default AuthenticatedLayout;
