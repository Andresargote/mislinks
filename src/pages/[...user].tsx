import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LinkCard } from '../components/LinkCard';
import { Navigation } from '../components/Navigation';
import { Select } from '../components/Select';

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
          <ul>
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
