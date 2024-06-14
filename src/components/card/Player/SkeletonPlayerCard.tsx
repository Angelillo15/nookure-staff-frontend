import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { HtmlHTMLAttributes } from 'react';

const PlayerSkeletonCard = ({ ...props }: HtmlHTMLAttributes<HTMLDivElement> ) => {
  return (
    <Card {...props}>
      <CardHeader className='flex flex-row gap-3'>
        <Skeleton className='w-10 h-10 rounded-full' />
        <div>
          <CardTitle className='flex flex-row gap-6'>
            <Skeleton className='w-24 h-4' />
            <div className='flex items-center space-x-2'>
              <Skeleton className='w-4 h-4 rounded-full' />
              <Skeleton className='w-16 h-4' />
            </div>
          </CardTitle>
          <CardDescription className='text-sm text-gray-500'>
            <Skeleton className='w-40 h-3 mt-2' />
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default PlayerSkeletonCard;