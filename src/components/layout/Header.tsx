import Image from "next/image";
import { IoSearch } from "react-icons/io5";
// import { IoPersonOutline } from "react-icons/io5";
import { TbLogin } from "react-icons/tb";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 w-full bg-white z-10 ">

      <div className="flex px-4 items-center shadow-sm">
        <Link href="/">
          <Image
            className="hidden lg:block"
            src="/images/full-horizontal.svg"
            alt="top-banner"
            width={200}
            height={200}
          />
        </Link>

        <div className="p-4 flex items-center w-full lg:w-1/2 ">
          <IoSearch className="relative text-slate-500 right-9" />
          <input
            className="bg-neutral-100	 w-400 h-10 text-xs px-10 w-full rounded-3xl lg:rounded-lg focus:outline-none"
            type="text"
            placeholder="جستجو..."
          />
        </div>

        <div className="hidden lg:flex grow justify-end text-2xl gap-9 items-center ">
          <Link href="/login" className="border-l-2 pl-8 text-sm">
            <button className="flex items-center gap-2 border border-slate-300 p-2 rounded-lg text-md">
              <TbLogin />
              ورود | ثبت نام
            </button>
          </Link>

          <Link href="/">
            <RiShoppingCartLine />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
