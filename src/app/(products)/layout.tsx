import "../globals.css";
import Image from "next/image";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

import Header from "@/components/layout/Header";

function ProductsPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <header className="w-full h-[72px] p-4  flex justify-between fixed top-0  shadow lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <FaArrowRightLong />
          <Image
            src="/images/typography-logo.svg"
            width={70}
            height={40}
            alt="digikala"
          />
        </Link>

        <div className="flex gap-8 text-xl">
          <button>
            <RiShoppingCartLine />
          </button>
          <button title="علاقه مندی ها">
            <FaRegHeart />
          </button>
          <button title="اشتراک گذاری">
            <IoShareSocialOutline />
          </button>
        </div>
      </header>
      <header className="hidden lg:block">
        <Header />
      </header>
      <div className="mt-20 w-11/12 mx-auto">{children}</div>
    </div>
  );
}

export default ProductsPageLayout;
