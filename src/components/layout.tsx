import Navbar from "~/components/nav/navbar";
import Footer from "~/components/footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="relative flex h-screen flex-col">
        <Navbar />
        <main className="h-full pb-16">{children}</main>
        <Footer />
      </div>
    </>
  );
}
