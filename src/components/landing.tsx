const Landing = () => {
  return (
    <div className="background-burger h-[90vh] w-full place-content-center bg-green-900 py-10 text-center text-3xl text-white md:p-10">
      <div className="md:pb-31 flex h-full w-full flex-row flex-wrap-reverse place-content-center gap-5 rounded p-10 pb-20 text-white md:gap-20">
        <div className="pb-8 md:pt-8">
          <h1 className="text-xl font-bold md:text-5xl">
            Ready for food on the go in San Antonio, Texas?
          </h1>
          <p className="pt-3 text-lg">Sign up or Login to get searching.</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Landing;
