import { SignIn } from "@clerk/nextjs";
import { type NextPage } from "next";

const SignUpPage: NextPage = () => (
  <div className="grid h-screen place-content-center">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </div>
);
export default SignUpPage;
