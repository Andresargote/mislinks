import { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { FormInput } from '../components/FormInput';
import { Header } from '../components/Header';

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>mislinks - Crear cuenta</title>
        <meta
          name='description'
          content='Almacena y organiza todos los links de videos, artículos o cualquier otra cosa que encuentres en internet y que quieres ver después. '
        />
      </Head>
      <Header user={false} />
      <main className='flex flex-col items-center justify-between max-w-lg p-5 m-auto gap-20px'>
        <h1 className='text-3xl font-bold text-gray-900 md:text-5xl'>Registrarse</h1>
        <section className='w-full'>
          <form className='flex flex-col gap-20px'>
            <div>
              <FormInput
                type='text'
                placeholder='Escribe tu dirección de correo electrónico'
              />
            </div>
            <div>
              <FormInput type='text' placeholder='Escribe tu contraseña' />
            </div>
            <Button type='submit' bgColor='bg-blue-700' textColor='text-white'>
              Crear cuenta
            </Button>
          </form>
        </section>
        <div className='w-full py-6px'>
          <div className='h-px bg-gray-100' />
        </div>
        <section className='flex flex-col w-full gap-20px'>
          <Button type='button' bgColor='bg-white' textColor='text-gray-500'>
            Continuar con Google
          </Button>
          <Button type='button' bgColor='bg-white' textColor='text-gray-500'>
            Continuar con Github
          </Button>
        </section>
        <div>
          <p className='text-center text-gray-500 '>
            Al registrarse, acepta{' '}
            <a className='underline' href='#'>
              nuestros términos y condiciones
            </a>{' '}
            y{' '}
            <a className='underline' href='#'>
              política de privacidad.
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
