import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";

export default async function SignIn() {
    return (
        <div className="flex items-center flex-col py-10">
            <SignInForm />
            <GoogleButton />
        </div>
        
    )
}