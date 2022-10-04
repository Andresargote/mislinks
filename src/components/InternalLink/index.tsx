import Link from 'next/link';

interface InternalLinkProps {
  url: string;
  text: string;
}

export function InternalLink({ url, text }: InternalLinkProps) {
  return (
    <Link href={url}>
      <a className='px-6px py-3px rounded-md transition ease-in duration-100 hover:bg-gray-100'>
        {text}
      </a>
    </Link>
  );
}
