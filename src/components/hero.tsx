/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative grid h-full w-full place-content-center px-10 py-16"
        style={{
          backgroundImage: "url(./assets/burger-hero.jpg)",
          backgroundPosition: "80% 100% fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: "inset 0 0 300px rgba(0,0,0,1)",
        }}
      >
        <div className="w-3/5 text-white">
          <p className="text-xl font-bold md:text-4xl">
            CHOOSE THE BEST FOODS
          </p>
          <div className="no-wrap ... mt-2 mb-8 flex max-h-36 overflow-hidden overflow-ellipsis text-base">
            Finding a great place to eat or just a place to hangout has never
            been easier. Sign in and find a restaurant that fits your style.
          </div>

          <Link href="https://pumped-seal-85.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Ffind">
            <div className="no-wrap flex w-40 transform-gpu animate-bounce whitespace-nowrap rounded-lg bg-green-500 py-2 px-4 font-bold uppercase duration-500 ease-in-out hover:scale-110 hover:rounded-xl hover:bg-zinc-900 hover:drop-shadow-lg">
              Get Started{" "}
              <div className="my-auto ml-2 h-4 w-4">
                <ArrowRightIcon height={15} />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
