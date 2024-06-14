import { editorRoutes } from "@/router/editor";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className='w-64 bg-stone-900 text-white flex-shrink-0 p-4 rounded-r-xl fixed min-h-full'>
      <h2 className='text-xl mb-4'>NookureStaff Editor</h2>
      <ul>
        {editorRoutes.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
