interface ButtonProps {
  bgColor: string;
  textColor: string;
  type: 'button' | 'submit';
  children: React.ReactNode;
}

export function Button({ bgColor, textColor, type, children }: ButtonProps) {
  return (
    <button
      type={type}
      className={`px-12px py-6px border rounded-md shadow ${bgColor} ${textColor} transition ease-in duration-100 hover:opacity-90`}
    >
      {children}
    </button>
  );
}
