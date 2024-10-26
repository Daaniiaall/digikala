"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function LoginPage() {
  const [userData , setUserData] = useState({})

  return (
    <div className="border w-96 my-[10%] mx-auto p-4">
      <Image
        className="mx-auto my-4"
        src="/images/full-horizontal.svg"
        alt="digikala"
        width={150}
        height={150}
      />
      <p className="mb-6 text-xl">ورود</p>

      <label htmlFor="username" className="text-slate-500 font-extralight">
        لطفا نام کاربری خود را وارد کنید
      </label>
      <input type="text" className=" border border-sky-400 rounded-lg w-full bg-slate-100 p-2 mb-4 mt-2 focus:outline-none" />
      <label htmlFor="password" className="text-slate-500 font-extralight">
        لطفا رمز عبور خود را وارد کنید
      </label>
      <input type="text" className=" border border-sky-400 rounded-lg w-full bg-slate-100 p-2 mb-4 mt-2 focus:outline-none" />
      <button className="bg-red-500 rounded-lg w-full text-white p-2">ورود</button>
      <p className="text-slate-400 text-sm mt-3 text-center" >حساب کاربری ندارید؟ <Link className="text-blue-500" href="/register" >ثبت نام</Link></p>
    </div>
  );
}

export default LoginPage;
 