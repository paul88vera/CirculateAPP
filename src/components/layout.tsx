import Navbar from '~/components/nav/navbar'
import Footer from '~/components/footer/footer'

export default function Layout({children}) {
  return (
    <>
      <div className='relative flex flex-col'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}