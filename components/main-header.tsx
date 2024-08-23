import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className="flex justify-between items-center px-4 py-8 md:py-8 md:px-[10%]">
                <Link
                    href="/"
                    className="flex items-center justify-center gap-8 text-[#ddd6cb] font-bold tracking-widest uppercase text-2xl"
                >
                    <Image
                        src={logoImg}
                        alt="A plate with food on it"
                        className="w-20 h-20 object-contain drop-shadow-sm"
                        priority
                    />
                    NextLevel Food
                </Link>

                <nav>
                    <ul className="flex gap-6 text-lg list-none m-0 p-0 ">
                        <li className="text-[#ddd6cb] font-bold py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:text-transparent hover:bg-clip-text hover:shadow-[0_0_18px_rgba(248,190,42,0.8)] active:bg-gradient-to-r active:from-[#ff8a05] active:to-[#f9b331] active:text-transparent active:bg-clip-text active:shadow-[0_0_18px_rgba(248,190,42,0.8)]">
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li className="text-[#ddd6cb] font-bold py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:text-transparent hover:bg-clip-text hover:shadow-[0_0_18px_rgba(248,190,42,0.8)] active:bg-gradient-to-r active:from-[#ff8a05] active:to-[#f9b331] active:text-transparent active:bg-clip-text active:shadow-[0_0_18px_rgba(248,190,42,0.8)]">
                            <Link href="/community">Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;
