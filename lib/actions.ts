"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function IsInvalidText(text: string) {
  return !text || text.trim() === "";
}

export async function ShareMeal(prevState: any, formData: any) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    IsInvalidText(meal.title) ||
    IsInvalidText(meal.summary) ||
    IsInvalidText(meal.instructions) ||
    IsInvalidText(meal.creator_email) ||
    IsInvalidText(meal.creator) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }

  await saveMeal(meal);
  redirect("/meals");
}
