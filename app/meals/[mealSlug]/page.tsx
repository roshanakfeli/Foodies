import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IProps {
  params: {
    mealSlug: string;
  };
}

export default function MealDetailsPage({ params }: IProps) {
  // console.log(params)
  const meal: any = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className="flex p-8 px-4 gap-12 mx-auto max-w-[80rem]">
        <div className="relative w-[30rem] h-[20rem]">
          <Image
            className="object-cover rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] animate-fade-slide-in-from-left"
            src={meal.image}
            alt={meal.title}
            fill
          />
        </div>
        <div className="p-2 px-4 pt-2 text-[#ddd6cb] max-w-[40rem] animate-fade-slide-in-from-right">
          <h1 className="m-0 text-[3.5rem] uppercase font-sans text-custom-shadow">
            {meal.title}
          </h1>
          <p className="text-[1.5rem] text-[#cfa69b] italic mt-5">
            by{" "}
            <a
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9572a] to-[#ff8a05] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#f9572a] hover:to-[#ff8a05] active:text-transparent active:bg-clip-text active:bg-gradient-to-r active:from-[#f9572a] active:to-[#ff8a05] hover:text-shadow-custom"
              href={`mailto:${meal.creator_email}`}
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-[1.5rem]">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-[1.25rem] leading-[1.5] bg-[#6e6464] text-[#13120f] rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] p-8 max-w-[60rem] mx-auto my-8 animate-fade-slide-in-from-bottom"
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
