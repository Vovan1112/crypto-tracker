"use client";
import { auth } from "@/app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      setMessage('Successfully register');
    })
    setEmail("");
    setPassword("");
  };


  // return (
  //   <>
  //   <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  //       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  //         <img
  //           className="mx-auto h-10 w-auto"
  //           src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
  //           alt="Your Company"
  //         />
  //         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
  //           Sign up
  //         </h2>
  //       </div>

  //       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  //         <div className="space-y-6">
  //           <div>
  //             <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
  //               Email address
  //             </label>
  //             <div className="mt-2">
  //               <input
  //                 id="email"
  //                 name="email"
  //                 type="email"
  //                 autoComplete="email"
  // onChange={(e) => setEmail(e.target.value)}
  //                 required
  //                 className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
  //               />
  //             </div>
  //           </div>

  //           <div>
  //             <div className="flex items-center justify-between">
  //               <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
  //                 Password
  //               </label>
  //             </div>
  //             <div className="mt-2">
  //               <input
  //                 id="password"
  //                 name="password"
  //                 type="password"
  //                 autoComplete="current-password"
  // onChange={(e) => setPassword(e.target.value)}
  //                 required
  //                 className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
  //               />
  //             </div>
  //           </div>
  //           <div>
  //             <div className="flex items-center justify-between">
  //               <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
  //                 Password Again
  //               </label>
  //             </div>
  //             <div className="mt-2">
  //               <input
  //                 id="passwordAgain"
  //                 name="passwordAgain"
  //                 type="password"
  //                 autoComplete="current-password"
  //                 onChange={(e) => setPasswordAgain(e.target.value)}
  //                 required
  //                 className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
  //               />
  //             </div>
  //           </div>

  //           <div>
  //             <button
  //               disabled={(!email || !password || !passwordAgain) || (password !== passwordAgain)}
  // onClick={() => signup()}
  //               className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
  //             >
  //               Sign Up
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // )

  return (
    <div className=" py-6 flex flex-col sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-custom-main shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Register</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => signup()}
                    className="text-black transition-colors hover:bg-indigo-500 duration-500 text-lg px-4 py-2 rounded-full border-solid border border-gray-400"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <p className="mt-10 text-center text-sm text-black">
           {message}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
