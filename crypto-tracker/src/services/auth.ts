import type { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: '1073936915027-jgqkg8fk3sj4l69i4fcma522fhe5174m.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ]
}