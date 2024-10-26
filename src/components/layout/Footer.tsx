import { IoMdHeart } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-red-600 w-full h-12 text-center text-md text-neutral-200 flex justify-center items-center">
      <p style={{direction: "ltr"}}>
        developed by{" "}
        <a
          href="https://github.com/Daaniiaall/"
          target="_blank"
          rel="noreferrer"
          className="text-white text-lg"
        >
          Danial Momenpour
        </a>{" "}
        with <IoMdHeart className="inline-block text-white relative -top-[0.2rem]" />
      </p>
    </footer>
  );
}

export default Footer;
