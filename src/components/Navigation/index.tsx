import Link from 'next/link';

type Link = {
  id: string;
  url: string;
  text: string;
};

interface InternalNavigationProps {
  links: Array<Link>;
}

export function Navigation({ links }: InternalNavigationProps) {
  return (
    <nav className='mb-30px'>
      <ul className='flex text-lg gap-20px'>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url}>
              <a className='transition duration-100 ease-in hover:text-blue-700'>
                {link.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
