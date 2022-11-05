import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function LinkCardSkeleton() {
  return (
    <div className='break-inside-avoid'>
      <div className=' mb-2.5 h-[150px] sm:h-[200px]'>
        <Skeleton height='100%' />
      </div>
      <div className='flex flex-col gap-2.5'>
        <div>
          <Skeleton count={3} />
        </div>
        <div>
          <span>
            <Skeleton width={100} />
          </span>
        </div>
      </div>
    </div>
  );
}
