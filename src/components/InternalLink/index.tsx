import Link from 'next/link';

interface InternalLinkProps {
  url: string;
  text: string;
}

export function InternalLink({ url, text }: InternalLinkProps) {
  return (
    <Link href={url}>
      <a className='transition duration-100 ease-in rounded-md px-6px py-3px hover:bg-gray-100'>
        {text}
      </a>
    </Link>
  );
}
