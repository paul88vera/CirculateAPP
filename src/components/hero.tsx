/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
const HeroSection = () => {
    return (
        <>
            <section className="w-full h-96 px-10 py-16 grid place-content-center relative" style={{backgroundImage: `url('images/assets/burger.png')`, backgroundPosition: '40% 100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', boxShadow: 'inset 0 0 300px rgba(0,0,0,1)' }}>
                    <div className="text-white w-3/5">
                        <p className='text-3xl md:text-6xl font-bold'>CHOOSE THE BEST FOODS</p>
                        <div className='mt-2 mb-8 max-h-36 text-base flex no-wrap overflow-ellipsis overflow-hidden ...'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt nulla id iure doloremque quas minus sequi quo, qui unde, accusamus iste maxime rerum sed laborum, autem labore voluptas architecto.</div>
                        <Link href="/">
                            <div className='w-40 bg-green-400 animate-bounce whitespace-nowrap py-2 px-4 hover:drop-shadow-lg rounded-lg hover:rounded-xl ease-in-out duration-500 font-bold hover:scale-110 uppercase transform-gpu no-wrap flex'>Get Started <div className="h-4 w-4 ml-2 my-auto"><ArrowRightIcon /></div></div>
                        </Link>
                    </div>
            </section>
        </>
    )
}

export default HeroSection