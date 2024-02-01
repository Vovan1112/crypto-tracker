import type { AuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";

export const authConfig: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials): Promise<any> {
                try {
                    const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
                    const user = userCredential.user;

                    if (user) {
                        return Promise.resolve(user);
                    } else {
                        return Promise.resolve(null);
                    }
                } catch (error) {
                    // Обработка ошибок входа
                    console.error("Ошибка входа:", error.message);
                    return Promise.resolve(null);
                }
            }
        })
    ],
    pages: {
        signIn: '/signin'
    },
}
