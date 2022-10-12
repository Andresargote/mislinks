import Image from 'next/image';
import { FiShare, FiTrash2 } from 'react-icons/fi';

export function LinkCard() {
  return (
    <li>
      <div className='mb-2.5 h-44 w-full relative'>
        <Image
          src='https://images.unsplash.com/photo-1650983248860-8747c75e6836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
          alt='Picture of the author'
          layout='fill'
          objectFit='cover'
          className='rounded-md'
        />
      </div>
      <div className='flex flex-col gap-2.5'>
        <h2 className='text-lg font-semibold text-gray-900'>
          Hay una silla gaming que cuesta casi 1300 euros: el argumento...
        </h2>
        <p className='text-sm font-normal text-gray-500'>Nota:</p>
        <p className='text-sm font-normal text-gray-500'>
          Las notas sobre el link son opcionales.
        </p>
        <cite>
          <span className='text-sm font-normal text-gray-500'>xataka.com</span>
        </cite>
      </div>
      <div className='flex mt-20px gap-2.5'>
        <button>
          <FiShare size={22} color='#6B7280' />
        </button>
        <button>
          <FiTrash2 size={22} color='#6B7280' />
        </button>
      </div>
    </li>
  );
}
