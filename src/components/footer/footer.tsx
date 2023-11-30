const Footer = () => {
  return (
    <>
      <footer className="static bottom-0 flex w-full flex-col justify-evenly bg-zinc-900 align-middle sm:flex-row md:flex-row lg:flex-row">
        <div className="py-4 text-center text-white">
          All Rights Reserved © Circulate 2023
        </div>
        <div className="py-4 text-center text-white">
          Developed by{" "}
          <a href="https://paulvera.com" className="hover:text-green-400">
            Paul Vera
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
