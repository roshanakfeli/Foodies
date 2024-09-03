import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center p-8 px-4 md:p-8 md:px-[10%]">
        <Link
          href="/"
          className=" flex items-center justify-center gap-8 no-underline text-[#ddd6cb] font-bold font-montserrat tracking-[0.15rem] uppercase text-xl"
        >
          <Image
            src={logoImg}
            alt="A plate with food on it"
            className="w-20 h-20 object-contain drop-shadow-sm"
            priority
          />
          NextLevel Food
        </Link>

        <nav className="nav">
          <ul className="flex gap-6 text-lg list-none m-0 p-0">
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
