import { Logo } from '../Logo';
import { InternalLink } from '../InternalLink';
import { UserMenu } from '../UserMenu';

interface HeaderProps {
  user: boolean;
}

export function Header({ user }: HeaderProps) {
  return (
    <header className='flex items-center justify-between max-w-3xl p-5 m-auto mb-30px'>
      <Logo />
      <nav>
        <ul className='flex'>
          {user ? (
            <UserMenu />
          ) : (
            <li>
              <InternalLink url='/login' text='Iniciar sesión' />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
