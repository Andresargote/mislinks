import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
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
        <section className='flex flex-col gap-20px'>
          <Button type='button' bgColor='bg-blue-700' textColor='text-white'>
            Agregar link
          </Button>
          <Select />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default User;