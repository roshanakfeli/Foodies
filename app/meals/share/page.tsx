'use client'

import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { ShareMeal } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
  //@ts-ignore
  const [state, formAction] = useFormState(ShareMeal, { message: null })

  return (
    <>
      <header className="gap-[3rem] mx-auto my-[3rem_5rem] w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem] mt-12">
        <h1>
          Share your <span className="highlight-text">favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-[75rem] mx-auto my-[3rem] text-white">
        <form className="max-w-[50rem]" action={formAction}>
          <div className="flex gap-1">
            <p>
              <label
                htmlFor="name"
                className="block mb-2 text-[1rem] font-bold uppercase text-[#b3aea5] font-sans"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full p-2.5 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] text-[#ddd6cb] font-sans mb-4 focus:outline-none focus:ring-0 focus:border-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
            <p>
              <label
                htmlFor="email"
                className="block mb-2 text-[1rem] font-bold uppercase text-[#b3aea5] font-sans"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full p-2.5 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] text-[#ddd6cb] font-sans mb-4 focus:outline-none focus:ring-0 focus:border-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
          </div>
          <p>
            <label
              htmlFor="title"
              className="block mb-2 text-[1rem] font-bold uppercase text-[#b3aea5] font-sans"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="block w-full p-2.5 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] text-[#ddd6cb] font-sans mb-4 focus:outline-none focus:ring-0 focus:border-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p>
            <label
              htmlFor="summary"
              className="block mb-2 text-[1rem] font-bold uppercase text-[#b3aea5] font-sans"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="block w-full p-2.5 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] text-[#ddd6cb] font-sans mb-4 focus:outline-none focus:ring-0 focus:border-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p>
            <label
              htmlFor="instructions"
              className="block mb-2 text-[1rem] font-bold uppercase text-[#b3aea5] font-sans"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
              className="block w-full p-2.5 rounded border border-[#454952] bg-[#1c2027] text-[1.25rem] text-[#ddd6cb] font-sans mb-4 focus:outline-none focus:ring-0 focus:border-[#f99f2a] focus:bg-[#1f252d]"
            ></textarea>
          </p>
          <ImagePicker label="your image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className="text-right">
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
