import PlayerCard from '@/components/card/Player/PlayerCard';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import { useParams } from 'react-router-dom';

const Editor = () => {
  const { id } = useParams();
  return (
    <AuthenticatedLayout>
      <div>Editor {id}</div>
      <div className='flex justify-center mt-12 flex-wrap gap-4 my-8'>
        <PlayerCard isOnline userName='Angelillo15' uuid='ad06ce5a-5e79-466f-84ea-61ea4b7f2912'/>
        <PlayerCard isOnline={false} userName='Angelillo15' uuid='ad06ce5a-5e79-466f-84ea-61ea4b7f2912' className='inline-grid'/>
        <PlayerCard isOnline={false} userName='Angelillo15' uuid='ad06ce5a-5e79-466f-84ea-61ea4b7f2912' className='inline-grid'/>
        <PlayerCard isOnline={false} userName='Angelillo15' uuid='ad06ce5a-5e79-466f-84ea-61ea4b7f2912' className='inline-grid'/>
        <PlayerCard isOnline={false} userName='Angelillo15' uuid='ad06ce5a-5e79-466f-84ea-61ea4b7f2912' className='inline-grid'/>
        <PlayerCard isOnline={false} userName='Angelillo15' uuid='ad06ce5a-5e79-466f-84ea-61ea4b7f2912' className='inline-grid'/>
        <PlayerCard isOnline={false} userName='Angelillo15' uuid='ad06ce5a-5e79-466f-84ea-61ea4b7f2912' className='inline-grid'/>
        <PlayerCard isOnline={false} userName='Angelillo15' uuid='ad06ce5a-5e79-466f-84ea-61ea4b7f2912' className='inline-grid'/>
        <PlayerCard isOnline={false} userName='Angelillo15' uuid='ad06ce5a-5e79-466f-84ea-61ea4b7f2912' className='inline-grid'/>
      </div>
    </AuthenticatedLayout>
  );
};

export default Editor;
