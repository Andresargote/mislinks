import { Button } from '../Button';

interface ModalProps {
  modalTitle: string;
  cancelButtonTitle: string;
  submitButtonTitle: string;
}

export function Modal({ modalTitle, cancelButtonTitle, submitButtonTitle }: ModalProps) {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center p-5 bg-black-rgba'>
      <div className='flex flex-col max-w-2xl w-full p-5 m-auto bg-white rounded-md shadow gap-[30px]'>
        <header>
          <h3 className='text-lg font-bold text-gray-900'>{modalTitle}</h3>
        </header>
        <div>
          <p>Modal content</p>
        </div>
        <footer className='flex gap-5'>
          <Button type='button' bgColor='bg-white' textColor='text-gray-900'>
            {cancelButtonTitle}
          </Button>
          <Button type='button' bgColor='bg-blue-700' textColor='text-white'>
            {submitButtonTitle}
          </Button>
        </footer>
      </div>
    </div>
  );
}
