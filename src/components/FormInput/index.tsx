interface FormInputProps {
  type: string;
  placeholder: string;
}

export function FormInput({ type, placeholder }: FormInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='w-full font-normal text-gray-500 bg-gray-100 rounded-md px-12px py-6px'
    />
  );
}
