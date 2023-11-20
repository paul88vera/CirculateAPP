import Image from "next/image";

const Landing = () => {
  return (
    <div className="w-full place-content-center bg-green-900 py-10 text-center text-3xl text-white md:p-10">
      <div className="md:pb-31 flex w-full flex-row flex-wrap-reverse place-content-center gap-5 rounded p-10 pb-20 text-white md:gap-20">
        <Image
          src="./assets/burger-hero.jpg"
          alt="Download Circulate App"
          height="500"
          width="500"
          className="w-full max-w-xl"
        />
        <div className="pb-8 md:pt-8">
          <h1 className="text-3xl font-bold md:text-5xl">
            Ready for food on the go?
          </h1>
          <p className="pt-3 text-xl">Our mobile app is coming soon!</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Landing;
