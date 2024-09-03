"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface IProps {
  label: string;
  name: string;
}

export default function ImagePicker({ label, name }: IProps) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput: any = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event: any) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader: any = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="flex items-start gap-6 mb-4">
        <div className=" relative w-40 h-40 border-2 border-[#a4abb9] text-[$a4abb9] flex justify-center items-center text-center">
          {!pickedImage && <p className="m-0 p-1">No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
              className="object-cover"
            />
          )}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png image/jpeg"
          name={name}
          className="hidden"
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          type="button"
          className="border-0 py-2 px-6 cursor-pointer font-inherit bg-[#a4abb9] rounded-sm hover:bg-[#b3b9c6] focus:bg-[#b3b9c6]"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
