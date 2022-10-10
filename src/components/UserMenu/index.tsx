import Image from 'next/image';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export function UserMenu() {
  return (
    <li className='transition duration-100 ease-in rounded-md hover:bg-gray-100 px-6px py-3px'>
      <div className='flex items-center gap-1.5 '>
        <Image
          width={44}
          height={44}
          src='https://media-exp1.licdn.com/dms/image/D4D03AQHf2mPzp4qlFA/profile-displayphoto-shrink_200_200/0/1663683093487?e=1671062400&v=beta&t=ZPt6duNh8Z9a_kHXM5VOLMxsmUHeF9M6yZVatOd2Pk0'
          alt='Avatar'
          layout='fixed'
          className='h-full rounded-full'
        />
        <MdOutlineKeyboardArrowDown size={22} color='#111827' />
      </div>
    </li>
  );
}
