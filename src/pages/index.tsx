import { type NextPage } from "next";

import Head from "next/head";
import HeroSection from "~/components/hero";
import ThreeColumnSection from "~/components/3columns";
import { SignIn } from "@clerk/nextjs";

const Home: NextPage = ({ ...pageProps }) => {
  return (
    <>
      <Head>
        <title>Circulate</title>
        <meta name="description" content="home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="relative flex h-full flex-col">
        {!SignIn ? (
          <HeroSection {...pageProps} />
        ) : (
          <ThreeColumnSection {...pageProps} />
        )}
      </section>
    </>
  );
};

export default Home;
