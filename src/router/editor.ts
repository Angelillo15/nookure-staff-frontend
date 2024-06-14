import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faClipboardUser } from '@fortawesome/free-solid-svg-icons/faClipboardUser';

export interface EditorProps {
  path: string;
  name: string;
  icon: IconProp;
}

export const editorRoutes: EditorProps[] = [
  {
    path: '/editor/:id',
    name: 'Online Players',
    icon: faUser,
  },
  {
    path: '/editor/:id/staffs',
    name: 'Staffs',
    icon: faClipboardUser,
  }
];
