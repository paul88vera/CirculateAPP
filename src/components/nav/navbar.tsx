// import Image from "next/image";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const Navbar = ({ ...pageProps }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isNav, setIsNav] = useState(false);
  const smallNav = useRef(null);
  const bigNav = useRef(null);
  const burger = useRef(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonRow =
    "pt-5 font-bold uppercase ease-in duration-200 px-2 border-b-4 border-solid border-green-500 text-white hover:border-white hover:text-white hover:animate-pulse";
  const buttonCol =
    "bg-zinc-300 text-center py-2 text-green-900 hover:text-zinc-900 hover:animate-pulse my-1 rounded-xl";

  useEffect(() => {
    //only add event listener when the nav menu is open
    if (!isNav) return;
    function handleClick(event: Event) {
      if (burger.current && !burger.current.contains(event.target)) {
        setIsNav(false);
      }
    }
    window.addEventListener("click", handleClick);
    //clean up
    return () => window.removeEventListener("click", handleClick);
  }, [isNav]);

  return (
    <>
      <nav className="relative sticky top-0 z-10 w-full">
        <div
          className="relative z-20 flex w-full flex-row justify-between bg-green-900 px-10"
          style={{ height: "60px", position: "relative" }}
        >
          {/* <Image
            src="images/brand/circulize_logo.svg"
            title="Circulate © 2023"
            alt="Circulate Logo"
            width="150"
            height="250"
          /> */}
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Circulate
          </h1>
          {!isMobile && (
            <div
              ref={bigNav}
              className="flex gap-4 text-white max-md:invisible"
            >
              <Link href="/" title="HOME" className={buttonRow}>
                Home
              </Link>
              <Link href="/find" title="FIND" className={buttonRow}>
                Find
              </Link>
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
          )}
          {isMobile && (
            <button
              ref={burger}
              className="relative my-auto h-10 w-10 cursor-pointer rounded-full bg-zinc-900 bg-opacity-100 p-1 text-white hover:animate-pulse hover:text-zinc-400"
              onClick={() => setIsNav((b) => !b)}
            >
              {isMobile && (
                <div className="pointer-events-none relative h-full">
                  <XMarkIcon
                    className={`absolute transition-opacity duration-300 ${
                      isNav ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <Bars4Icon
                    className={`absolute transition-opacity duration-300 ${
                      isNav ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </div>
              )}
            </button>
          )}
        </div>
        <div className="relative flex w-full flex-row">
          <div
            ref={smallNav}
            className={`absolute flex w-full flex-col gap-1 bg-zinc-900 py-8 px-10 text-xl text-white transition-transform transition-opacity duration-700 ease-in-out ${
              isNav && isMobile
                ? "translate-y-0 opacity-100"
                : "-translate-y-72 opacity-0"
            }`}
          >
            <SignedOut>
              <Link
                href="https://pumped-seal-85.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Ffind"
                className={buttonCol}
              >
                Sign In
              </Link>
            </SignedOut>
            <Link href="/" className={buttonCol}>
              Home
            </Link>
            <Link href="/find" className={buttonCol}>
              Find
            </Link>
            <SignedIn>
              <Link href="/profile" className={buttonCol}>
                Profile
              </Link>
            </SignedIn>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
