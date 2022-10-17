interface ButtonProps {
  bgColor: string;
  textColor: string;
  type: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ bgColor, textColor, type, children, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      className={`w-full px-12px py-6px border rounded-md shadow ${bgColor} ${textColor} transition ease-in duration-100 hover:opacity-90`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
