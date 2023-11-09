import type { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import Users from "./User";
import bcrypt from "bcryptjs"
import connect from "@/data/db";

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        Credentials({
            credentials: {
                email: {label: 'email', type: 'email', required: true},
                password: {label: 'password', type: 'password', required: true},
            },
            async authorize(credentials) {
                await connect();
        
                try {
                  const user = await Users.findOne({
                    email: credentials!.email,
                  });
        
                  if (user) {
                    const isPasswordCorrect = await bcrypt.compare(
                      credentials!.password,
                      user.password
                    );
        
                    if (isPasswordCorrect) {
                      return user;
                    } else {
                      throw new Error("Wrong Credentials!");
                    }
                  } else {
                    throw new Error("User not found!");
                  }
                } catch (err) {
                  throw new Error(err);
                }
              },
        })
    ],
    pages: {
        signIn: '/signin'
    }
    
}