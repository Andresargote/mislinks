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
        <img
          src={websiteInformation.img}
          alt={websiteInformation.title}
          className='rounded-md mb-2.5 h-[150px] sm:h-[200px] w-full object-cover'
        />
      )}
      <div className='flex flex-col gap-2.5'>
        <h2 className='text-lg font-semibold text-gray-900'>
          {websiteInformation?.title}
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
            {websiteInformation?.domain}
          </span>
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
