import Link from "next/link";
import { ReactNode } from "react";

interface Button {
  href?: string;
  className?: string;
  children: ReactNode;
}

export const Button = ({ href = `/`, className = ``, children }: Button) => {
  return (
    <Link
      href={href}
      className={`inline-block px-4 py-2 border border-solid border-transparent rounded-md text-sm ${className}`}
    >
      {children}
    </Link>
  );
};

export const ButtonSolid = ({ children, ...props }: Button) => {
  return (
    <Button className="bg-white border-white text-sky-500" {...props}>
      {children}
    </Button>
  );
};
