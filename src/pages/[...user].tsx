import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LinkCard } from '../components/LinkCard';
import { Navigation } from '../components/Navigation';
import { Select } from '../components/Select';
import { Modal } from '../components/Modal';

type WebsiteInformation = {
  title?: string;
  img?: string;
  domain?: string;
};

interface LinksFromApi {
  id: number;
  note: string;
  url: string;
  websiteInformation: WebsiteInformation;
}

/*fake data*/
const links: Array<LinksFromApi> = [
  {
    id: 2,
    note: 'Esto es un ejemplo de nota',
    url: 'https://www.xataka.com/energia/tope-gas-tiene-efecto-rebote-inesperado-uno-que-europa-quiza-no-se-pueda-permitir',
    websiteInformation: {
      title:
        'El tope del gas tiene un efecto rebote inesperado. Uno que Europa quizá no se pueda permitir',
      domain: 'xataka.com',
      img: 'https://cdn.peekalink.io/public/images/0c5fa2b0-db8d-4c2a-9f13-21d8e3ace78b/221dd294-6f3a-47bb-a7f5-f2e80d2f3b62.jpg',
    },
  },
  {
    id: 3,
    note: '',
    url: 'https://www.xataka.com/investigacion/estos-investigadores-estan-creando-cucarachas-cyborg-su-objetivo-loable-que-aparenta',
    websiteInformation: {
      title:
        'Estos investigadores están creando cucarachas cyborg. Su objetivo es más loable de lo que aparenta',
      domain: 'xataka.com',
      img: 'https://cdn.peekalink.io/public/images/cbb3f0b7-279b-4c30-8fca-cb455af51881/7aa5cb19-0159-495c-a22b-b47b108eed82.jpg',
    },
  },
  {
    id: 4,
    note: '',
    url: 'https://justjavascript.com/',
    websiteInformation: {
      title: 'Just JavaScript',
      domain: 'justjavascript.com',
      img: 'https://cdn.peekalink.io/public/images/262f51d5-8ba4-4897-83ae-b22ab7b42bdd/07c3116c-886d-4acc-a1a6-83ffd02e8d3e.jpg',
    },
  },
  {
    id: 5,
    note: 'Esto es un ejemplo de nota',
    url: 'https://www.xataka.com/perifericos/no-hay-muchos-fabricantes-que-presten-atencion-a-accesibilidad-microsoft-uno-ellos-sube-apuesta',
    websiteInformation: {
      title:
        'La accesibilidad es la gran olvidada para muchos fabricantes, pero no para Microsoft: así son sus nuevos periféricos modulares',
      domain: 'xataka.com',
      img: 'https://cdn.peekalink.io/public/images/6eb89d30-080d-4f3b-a565-cd8341667f69/40a59512-9068-4344-a7d0-3bf571a7d04b.jpg',
    },
  },
  {
    id: 6,
    note: 'Esto es otro ejemplo de nota',
    url: 'https://www.xataka.com/perifericos/microsoft-audio-dock-caracteristicas-precio-ficha-tecnica',
    websiteInformation: {
      title:
        'Microsoft Audio Dock: mezclar un altavoz con un hub de puertos USB y HDMI no parece mala idea',
      domain: 'xataka.com',
      img: 'https://cdn.peekalink.io/public/images/52dbfd5b-5d2e-4077-b074-2275825e44cf/9fe8ad86-eeb1-4351-aa4a-17b72e461e27.jpg',
    },
  },
];

const User: NextPage = () => {
  return (
    <>
      <Head>
        <title>mislinks - UserName</title>
        <meta
          name='description'
          content='Almacena y organiza todos los links de videos, artículos o cualquier otra cosa que encuentres en internet y que quieres ver después. '
        />
      </Head>
      <Header user={true} />
      <div className='max-w-3xl p-5 m-auto mb-30px'>
        <Navigation
          links={[
            {
              id: '1',
              url: '#',
              text: 'Mis links',
            },
            {
              id: '2',
              url: '#',
              text: 'Mis categorías',
            },
          ]}
        />
        <section className='flex flex-col gap-20px mb-30px'>
          <Button type='button' bgColor='bg-blue-700' textColor='text-white'>
            Agregar link
          </Button>
          <Select />
        </section>
        <main className='max-w-3xl m-auto mb-30px'>
          <ul className='gap-5 space-y-5 columns-1 sm:columns-2'>
            {links.map((item, i) => (
              <LinkCard
                key={i}
                note={item.note}
                url={item.url}
                websiteInformation={item.websiteInformation}
              />
            ))}
          </ul>
        </main>
      </div>
      <Footer />
      <Modal
        modalTitle='Agregar link'
        cancelButtonTitle='Cancelar'
        submitButtonTitle='Agregar link'
      />
    </>
  );
};

export default User;
