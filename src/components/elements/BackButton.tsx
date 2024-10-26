"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

function BackButton() {
  const router = useRouter();
  const backHandler = () => {
    router.back()
  }
  return (
    <button className="flex items-center gap-2 border border-indigo-800 p-2 rounded-lg mt-6 text-indigo-600" onClick={backHandler}>
      بازگشت
      <FaArrowLeftLong />
    </button>
  );
}

export default BackButton;
