import Layout from '@/components/layout/Layout';
import SidebarProvider from '@/components/nav/sidebar/SidebarProvider';
import Editor from '@/pages/Editor/Index';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/editor/:id',
        element: <SidebarProvider />,
        children: [{
          path: '/editor/:id',
          element: <Editor />
        }],
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
]);
export default router;
