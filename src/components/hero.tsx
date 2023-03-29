/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
const HeroSection = () => {
    return (
        <>
            <section className="w-full h-3/5 px-10 py-16 grid place-content-center relative" style={{backgroundImage: `url('images/assets/burger.png')`, backgroundPosition: '40% 100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'inset 0 0 300px rgba(0,0,0,1)' }}>
                    <div className="text-white w-3/4">
                        <p className='text-3xl font-bold'>CHOOSE THE BEST FOODS</p>
                        <div className='mt-2 mb-8 max-h-36 text-base flex no-wrap overflow-ellipsis overflow-hidden ...'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt nulla id iure doloremque quas minus sequi quo, qui unde, accusamus iste maxime rerum sed laborum, autem labore voluptas architecto.</div>
                        <Link href="/" className='bg-green-400 whitespace-nowrap py-2 px-4 rounded-lg hover:rounded-sm ease-in-out duration-500 font-bold animate-pulse hover:animate-none hover:scale-105 uppercase'>Get Started</Link>
                    </div>
            </section>
        </>
    )
}

export default HeroSection