import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HtmlHTMLAttributes } from 'react';

interface Props {
  userName: string;
  uuid: string;
  isOnline: boolean;
}

const PlayerCard = ({ userName, uuid, isOnline, ...props }: Props & HtmlHTMLAttributes<HTMLDivElement> ) => {
  return (
    <Card {...props}>
      <CardHeader className='flex flex-row gap-3'>
        <img src={`https://mc-heads.net/head/${userName}`} alt={userName} className='w-10 h-10' />
        <div>
          <CardTitle className='flex flex-row gap-6 justify-between flex-wrap '>
            {userName}
            <div className='flex items-center space-x-2'>
              <span className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <p className='text-sm'>{isOnline ? 'Online' : 'Offline'}</p>
            </div>
          </CardTitle>
          <CardDescription className='text-sm text-gray-500'>{uuid}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default PlayerCard;
