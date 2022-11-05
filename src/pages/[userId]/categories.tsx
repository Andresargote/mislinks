import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Navigation';

const Categories: NextPage = () => {
  return (
    <>
      <Head>
        <title>mislinks - Categorías</title>
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
              url: '/andresargote',
              text: 'Mis links',
              active: false,
            },
            {
              id: '2',
              url: `andresargote/categories`,
              text: 'Mis categorías',
              active: true,
            },
          ]}
        />
      </div>
    </>
  );
};

export default Categories;
