import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.css";

interface IProps {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

const MealItem = ({ title, slug, image, summary, creator }: IProps) => {
  return (
    <article className="flex flex-col justify-between h-full rounded-sm shadow-lg overflow-hidden transition-all duration-300 ease-in-out text-[#ddd6cb] bg-custom">
      <header>
        <div className="relative h-[15rem]">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="pt-2 pr-4 pb-0 pl-4">
          <h2 className="m-0 text-2xl font-montserrat">{title}</h2>
          <p className="m-0 text-xs text-custom-color italic">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="pt-4 pr-4 pb-0 pl-4">{summary}</p>
        <div className="p-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-block mt-4 py-2 px-4 rounded text-white font-bold no-underline bg-gradient-custom"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
