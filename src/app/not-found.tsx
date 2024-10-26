import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";


function NotFoundPage() {
  return (
    <div className="mt-28 w-11/12 mx-auto">
      <Image
        src="/images/404.png"
        width={400}
        height={200}
        alt="404"
        className="mx-auto rounded-2xl"
      />
      <div className="mt-10 flex flex-col items-center">
        <p className="text-slate-600 text-md ">
          متاسفانه محتوای این صفحه در ریسپانس برگشتی از Api وجود ندارد😒
        </p>
        <Link
          href="/"
          className="text-purple-800 border-2 border-purple-800 p-2 rounded-lg mt-8 flex items-center gap-1"
        >
          صفحه اصلی
          <FaArrowLeftLong />
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
