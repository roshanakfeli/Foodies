"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="btn-gradient p-3 px-8">
      {pending ? "Submitting" : "ShareMeal"}
    </button>
  );
}
