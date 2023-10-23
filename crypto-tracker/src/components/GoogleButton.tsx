'use client'

import {signIn} from "next-auth/react"
import { useSearchParams } from "next/navigation"

const GoogleButton = () => {

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/'

    return (
        <button className="text-black transition-colors hover:bg-indigo-500 duration-500 text-lg px-4 py-2 rounded-full border-solid border border-gray-400"
        onClick={() => signIn('google', {callbackUrl})}>
            Sign in with Google
        </button>
    )
}

export {GoogleButton}