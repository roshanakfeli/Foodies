"use client";

export default function Error() {
  return (
    <main className="mt-20 text-center">
      <h6 className="text-[5rem] m-0 font-extrabold uppercase font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#f9572a] to-[#ffc905]">
        An error occurred!
      </h6>
      <p className="text-[1.5rem] font-medium text-[#ddd8d8]">
        Failed to create meal.
      </p>
    </main>
  );
}
