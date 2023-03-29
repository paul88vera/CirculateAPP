import { type NextPage } from "next";

import Head from "next/head";
import HeroSection from "~/components/hero";
import ThreeColumnSection from "~/components/3columns"

const Home: NextPage = ({...pageProps}) => {

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-zinc-900 relative h-screen">
        <HeroSection {...pageProps} />
        <ThreeColumnSection {...pageProps} />
      </section>
    </>
  );
};

export default Home;