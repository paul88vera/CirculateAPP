import { SignUp } from "@clerk/nextjs";
import { type NextPage } from "next";
 
const SignUpPage: NextPage = () => (
    <div className="grid place-content-center h-screen">
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
);
export default SignUpPage;