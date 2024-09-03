import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className="gap-12 mx-auto my-12 w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem]">
        <h1 className="font-montserrat text-5xl">
          Delicious meals, created <span className="gradient-h1">by you</span>
        </h1>
        <p className="mt-8">
          Choose your favorite recipe and cood it yourself, It is easy and fun!
        </p>
        <p className="m-0">
          <Link
            href="/meals/share"
            className="inline-block py-2 px-4 rounded-md bg-gradient-custom text-white font-bold no-underline"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense
          fallback={
            <p className="text-center animate-loading">Fetching Meals...</p>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
