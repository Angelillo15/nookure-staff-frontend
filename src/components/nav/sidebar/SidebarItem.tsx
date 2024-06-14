import { EditorProps } from '@/router/editor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';

const SidebarItem = ({ item }: { item: EditorProps }) => {
  const { id } = useParams();

  return (
    <li className='flex items-center sidebar'>
      <Link to={item.path.replace(':id', id as string)} className='flex items-center p-2'>
        <span className='mr-2 bg-stone-800 hover:bg-red-500 transition-colors p-4 rounded-xl h-12 flex justify-center align-middle'>
          <FontAwesomeIcon icon={item.icon} />
        </span>
        {item.name}
      </Link>
    </li>
  );
};

export default SidebarItem;
