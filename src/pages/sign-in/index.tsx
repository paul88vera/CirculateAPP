import { SignIn } from "@clerk/nextjs";
import { type NextPage } from "next";
 
const SignUpPage: NextPage = () => (
    <div className="grid place-content-center h-screen">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
);
export default SignUpPage;