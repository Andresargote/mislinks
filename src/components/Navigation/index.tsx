import Link from 'next/link';

type Link = {
  id: string;
  url: string;
  text: string;
  active: boolean;
};

interface InternalNavigationProps {
  links: Array<Link>;
}

export function Navigation({ links }: InternalNavigationProps) {
  return (
    <nav className='mb-30px'>
      <ul className='flex text-lg gap-20px'>
        {links.map((link) => (
          <li key={link.id} className={link.active ? 'text-blue-700' : ''}>
            <Link href={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
