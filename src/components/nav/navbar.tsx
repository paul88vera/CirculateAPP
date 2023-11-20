import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-10 w-full">
        <div className="relative z-20 flex w-full flex-row justify-between bg-green-900 px-10 py-6">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Circulate
          </h1>
          <div className="flex gap-4 text-white">
            <SignedIn>
              <div className="my-auto rounded-full border-4 border-green-500 hover:animate-pulse hover:border-green-100">
                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="hover:inner-shadow my-auto flex cursor-pointer rounded-full bg-zinc-800 px-4 py-2 font-bold text-white hover:bg-black">
                <SignInButton />
              </div>
            </SignedOut>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
