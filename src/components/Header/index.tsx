import { Logo } from '../Logo';
import { InternalLink } from '../InternalLink';

export function Header() {
  return (
    <header className='flex m-auto max-w-3xl p-5 items-center justify-between mb-30px'>
      <Logo />
      <nav>
        <ul>
          <li>
            <InternalLink url='/' text='Iniciar sesión' />
          </li>
        </ul>
      </nav>
    </header>
  );
}
