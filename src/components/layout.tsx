import Navbar from '~/components/nav/navbar'
import Footer from '~/components/footer/footer'

export default function Layout({children}) {
  return (
    <>
      <div className='relative'>
        <Navbar />
          <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}