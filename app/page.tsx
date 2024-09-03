"use client";
import ImageSlideshow from "@/components/images/image-slideshow";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-6xl">
        <div className="w-[40rem] h-[25rem]">
          <ImageSlideshow />
        </div>
        <div>
          <div className="text-[#ddd6cb] text-2xl">
            <h1 className="text-[2rem] font-bold tracking-[0.15rem] uppercase custom-gradient bg-clip-text bg-gradient-to-r from-[#f9572a] to-[#ffc905] text-gradient">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="my-5">Taste & share food from all over the world.</p>
          </div>
          <div className="flex gap-4 text-2xl ">
            <Link
              href="/community"
              className="inline-block mt-4 py-2 px-4 rounded-lg font-bold no-underline text-white 
              first:bg-transparent first:font-normal first:text-[#ff9b05] first:pl-0 first:hover:bg-transparent first:active:bg-transparent first:hover:text-[#f9b241] first:active:text-[#f9b241]              "
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="inline-block mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-custom-orange-1 to-custom-orange-2 font-bold no-underline text-white hover-gradient active-gradient "
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
