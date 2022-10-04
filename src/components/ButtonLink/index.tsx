import Link from 'next/link';

interface ButtonLinkProps {
  url: string;
  text: string;
  backgroundColor: string;
  textColor: string;
}

export function ButtonLink({ url, text, backgroundColor, textColor }: ButtonLinkProps) {
  return (
    <Link href={url}>
      <a
        className={`font-semibold px-12px py-6px ${backgroundColor} ${textColor} w-fit rounded-md shadow-md transition ease-in duration-100 hover:opacity-90`}
      >
        {text}
      </a>
    </Link>
  );
}
