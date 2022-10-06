import { Logo } from '../Logo';
import { InternalLink } from '../InternalLink';

export function Header() {
  return (
    <header className='flex items-center justify-between max-w-3xl p-5 m-auto mb-30px'>
      <Logo />
      <nav>
        <ul>
          <li>
            <InternalLink url='/login' text='Iniciar sesión' />
          </li>
        </ul>
      </nav>
    </header>
  );
}
