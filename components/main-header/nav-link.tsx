"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  href: string;
  children: string;
}

const NavLink = ({ href, children }: IProps) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`
            no-underline text-[#ddd6cb] font-bold py-2 px-4 rounded-md
              ${path.startsWith(href) ? "gradient-text" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
