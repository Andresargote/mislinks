import { useCallback, useEffect } from 'react';
import { Button } from '../Button';

interface ModalProps {
  modalTitle: string;
  cancelButtonTitle: string;
  submitButtonTitle: string;
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({
  modalTitle,
  cancelButtonTitle,
  submitButtonTitle,
  show,
  onClose,
  children,
}: ModalProps) {
  const closeOnEscapeKeyDown = useCallback(
    (e: { charCode: number; keyCode: number }) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'unset';
    document.addEventListener('keydown', closeOnEscapeKeyDown);
    return () => {
      document.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  if (!show) {
    return null;
  }

  return (
    <div
      className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center p-5 bg-black-rgba'
      onClick={onClose}
    >
      <div
        className='flex flex-col max-w-2xl w-full p-5 m-auto bg-white rounded-md shadow gap-[30px]'
        onClick={(e) => e.stopPropagation()}
      >
        <header>
          <h3 className='text-lg font-bold text-gray-900'>{modalTitle}</h3>
        </header>
        <div>{children}</div>
        <footer className='flex gap-5'>
          <Button
            type='button'
            bgColor='bg-white'
            textColor='text-gray-900'
            onClick={onClose}
          >
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
