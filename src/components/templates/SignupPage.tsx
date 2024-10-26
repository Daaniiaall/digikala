"use client";
import Image from "next/image";
import { useState } from "react";

function SignupPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const registerHandler = async () => {
    // console.log("first")
    // const res = await fetch("http://80.75.14.90:9090/users/register" , {
    //   method: "POST",
    //   body: JSON.stringify({username ,password}),
    // })
    // const result = await res.json()
    // console.log(result)
  }

  return (
    <div className="border w-96 my-[10%] mx-auto p-4">
      <Image
        className="mx-auto my-4"
        src="/images/full-horizontal.svg"
        alt="digikala"
        width={150}
        height={150}
      />
      <p className="mb-6 text-xl">ثبت نام</p>
      <span className=" text-slate-500 text-sm flex flex-col font-extralight my-4">سلام!</span>

      <label htmlFor="username"  className="text-slate-500 font-extralight">
        لطفا نام کاربری (شماره موبایل / ایمیل) خود را وارد کنید
      </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className=" border border-sky-400 rounded-lg w-full bg-slate-100 p-2 mb-4 mt-2 focus:outline-none"
      />
      <label htmlFor="password" className="text-slate-500 font-extralight">لطفا رمز عبور خود را وارد کنید</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className=" border border-sky-400 rounded-lg w-full bg-slate-100 p-2 mb-4 mt-2 focus:outline-none"
      />
      <button onClick={registerHandler} className="bg-red-500 rounded-lg w-full text-white p-2">ثبت نام</button>
    </div>
  );
}

export default SignupPage;
