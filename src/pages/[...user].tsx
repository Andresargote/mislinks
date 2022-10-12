import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LinkCard } from '../components/LinkCard';
import { Navigation } from '../components/Navigation';
import { Select } from '../components/Select';

interface LinksFromApi {
  id: number;
  note?: string;
  url: string;
  websiteInformation: object;
  domain?: string;
}

/*fake data*/
const links: Array<LinksFromApi> = [
  {
    id: 1,
    note: '',
    url: 'https://www.xataka.com/ordenadores-y-accesorios/sillas-gaming-precio-1300-euros-argumento',
    websiteInformation: {},
  },
  {
    id: 2,
    note: 'Esto es un ejemplo de nota',
    url: 'https://www.xataka.com/analisis/apple-watch-ultra-analisis-caracteristicas-precio-especificaciones',
    websiteInformation: {},
  },
  {
    id: 3,
    note: '',
    url: 'https://www.xataka.com/investigacion/estos-investigadores-estan-creando-cucarachas-cyborg-su-objetivo-loable-que-aparenta',
    websiteInformation: {},
  },
  {
    id: 4,
    note: '',
    url: 'https://www.xataka.com/perifericos/no-hay-muchos-fabricantes-que-presten-atencion-a-accesibilidad-microsoft-uno-ellos-sube-apuesta',
    websiteInformation: {},
  },
  {
    id: 5,
    note: 'Esto es un ejemplo de nota',
    url: 'https://www.xataka.com/perifericos/no-hay-muchos-fabricantes-que-presten-atencion-a-accesibilidad-microsoft-uno-ellos-sube-apuesta',
    websiteInformation: {},
  },
  {
    id: 6,
    note: 'Esto es otro ejemplo de nota',
    url: 'https://www.xataka.com/perifericos/microsoft-audio-dock-caracteristicas-precio-ficha-tecnica',
    websiteInformation: {},
  },
];

const User: NextPage = () => {
  const [allLinks, setAllLinks] = useState(links);

  //this is a demo is not the final solution (this logic has to be done from the backend)
  const getWebsiteInformationByListOfLinks = async (links: Array<LinksFromApi>) => {
    const newLinks = [];

    for (const link of links) {
      try {
        const response = await fetch(`https://api.linkpreview.net`, {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify({
            key: process.env.NEXT_PUBLIC_API_KEY_LINK,
            q: link.url,
          }),
        });
        let domain = new URL(link.url).hostname;
        link.domain = domain;
        const data = await response.json();
        link.websiteInformation = data;
        newLinks.push(link);
      } catch (error) {
        console.log(error);
      }
    }

    setAllLinks(newLinks);
  };

  useEffect(() => {
    //getWebsiteInformationByListOfLinks(allLinks);
  }, []);

  console.log(allLinks);

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
          <ul className='grid gap-5 grid-cols-listOfLinks sm:grid-cols-2'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
              <LinkCard key={i} />
            ))}
          </ul>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default User;
