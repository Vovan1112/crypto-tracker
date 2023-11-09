'use client'
import { useRouter } from "next/navigation"
import {type FormEventHandler } from "react";

const RegisterForm = () => {

    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');

        try {

            const res = await fetch("/api/auth/register", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            res.status === 201 && router.push("/signin?success=User has been registered")
            
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form className=" py-6 flex flex-col sm:py-12" onSubmit={handleSubmit}>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-custom-main shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                    <div>
                        <h1 className="text-2xl font-semibold">Register</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="relative">
                                <input id="name" name="name" type="text" className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Login" />
                            </div>
                            <div className="relative">
                                <input id="email" name="email" type="text" className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                            </div>
                            <div className="relative">
                                <input id="password" name="password" type="password" className="h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="text-black transition-colors hover:bg-indigo-500 duration-500 text-lg px-4 py-2 rounded-full border-solid border border-gray-400">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    )
}

export {RegisterForm}