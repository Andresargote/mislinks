import { FiShare, FiTrash2 } from 'react-icons/fi';

type WebsiteInformation = {
  title: string;
  description: string;
  image: string;
  url: string;
};

interface LinkCardProps {
  note: string;
  url: string;
  websiteInformation: {
    title?: string;
    img?: string;
    domain?: string;
  };
}

export function LinkCard({ note, url, websiteInformation }: LinkCardProps) {
  return (
    <li className='break-inside-avoid'>
      {websiteInformation?.img && (
        <a href={url} target='_blank' rel='noreferrer'>
          <img
            src={websiteInformation.img}
            alt={websiteInformation.title}
            className='rounded-md mb-2.5 h-[150px] sm:h-[200px] w-full object-cover'
          />
        </a>
      )}
      <div className='flex flex-col gap-2.5'>
        <h2 className='text-lg font-semibold text-gray-900 hover:underline'>
          <a href={url} target='_blank' rel='noreferrer'>
            {websiteInformation?.title}
          </a>
        </h2>
        {note && (
          <>
            <p className='text-sm font-normal text-gray-500'>Nota:</p>
            <p className='text-sm font-normal text-gray-500'>
              Las notas sobre el link son opcionales.
            </p>
          </>
        )}
        <cite>
          <span className='text-sm font-normal text-gray-500'>
            <a href={url} target='_blank' rel='noreferrer'>
              {websiteInformation?.domain}
            </a>
          </span>
        </cite>
      </div>
      <div className='flex gap-1 mt-20px'>
        <button className='p-[10px] rounded-full transition duration-100 ease-in hover:bg-gray-50 '>
          <FiShare size={22} color='#6B7280' />
        </button>
        <button className='p-[10px] rounded-full hover:bg-gray-50'>
          <FiTrash2 size={22} color='#6B7280' />
        </button>
      </div>
    </li>
  );
}
