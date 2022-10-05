import type { NextPage } from 'next';
import Head from 'next/head';
import { ButtonLink } from '../components/ButtonLink';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          mislinks - Almacena contenido y accede a él desde cualquier dispositivo
        </title>
        <meta
          name='description'
          content='Almacena y organiza todos los links de videos, artículos o cualquier otra cosa que encuentres en internet y que quieres ver después. '
        />
      </Head>
      <Header />
      <main className='flex flex-col max-w-3xl m-auto gap-30px'>
        <section className='flex flex-col gap-5 p-5'>
          <h1 className='text-3xl font-bold text-gray-900 md:text-5xl'>
            Almacena contenido y accede a él desde cualquier dispositivo
          </h1>
          <p className='text-lg font-semibold text-gray-500 md:text-xl'>
            Almacena y organiza todos los links de videos, artículos o cualquier otra cosa
            que encuentres en internet y que quieres ver después.{' '}
          </p>
          <ButtonLink
            url='/signup'
            text='Crea una cuenta gratis'
            backgroundColor='bg-blue-700'
            textColor='text-white'
          />
        </section>
        <section className='flex flex-col gap-5 p-5'>
          <h2 className='text-3xl font-bold text-gray-900 md:text-5xl'>
            ¿Cómo funciona mislinks?
          </h2>
          <p className='text-lg font-semibold text-gray-500 md:text-xl'>
            Es muy fácil de usar, basta con agregar el link en la aplicación y luego
            organizarlos por categorías. También puedes añadir notas a cada enlace para
            que puedas recordar por qué lo quieres ver.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
