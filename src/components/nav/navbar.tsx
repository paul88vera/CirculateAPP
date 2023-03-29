import Image from 'next/image'
import { Bars4Icon} from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link'
import { SignedIn, UserButton } from "@clerk/nextjs";


const Navbar = ({...pageProps}) => {
    const [isMobile, setIsMobile] = useState(false)
    const [isNav, setIsNav] = useState(false)
    const smallNav = useRef(null)
    const bigNav = useRef(null)
    const burger = useRef(null)

    useEffect(() => {
        function handleResize(){
            setIsMobile(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const buttonRow = "pt-5 font-bold uppercase ease-in duration-200 px-2 border-b-4 border-solid border-green-500 text-black hover:border-white hover:text-white"
    const buttonCol = "bg-zinc-800 text-center py-2 hover:text-green-400 hover:animate-pulse my-1 rounded-xl"

    useEffect(() => {
        //onlyly add event listener when the nav menu is open
        if(!isNav) return;
        function handleClick(event: Event) {
            if(burger.current && !burger.current.contains(event.target)){
                setIsNav(false)
            }
        }
        window.addEventListener("click", handleClick);
        //clean up
        return () => window.removeEventListener("click", handleClick)
    }, [isNav])

    return (
        <>
<nav className='grid w-full relative sticky top-0 z-10'>
            <div className="bg-green-500 flex flex-row w-full px-10 justify-between relative z-20" style={{height: '60px', position: 'relative'}}>
                <Image src="images/brand/circulize_logo.svg" className="invert hover:animate-pulse cursor-pointer" alt="Circulize Logo" width='150' height='250' />
                <p>{isMobile}</p>
                {!isMobile && <div ref={bigNav} className="gap-4 text-white flex max-md:invisible">
                    <Link href="/" className={buttonRow}>Home</Link>
                    <Link href="/about" className={buttonRow}>About</Link>
                    <Link href="/find" className={buttonRow}>Find</Link>
                    <Link href="/contact" className={buttonRow}>Contact</Link>
                </div>}
                {isMobile && 
                    <button ref={burger} className='w-10 h-10 bg-black hover:animate-pulse my-auto rounded-full p-1 text-white hover:text-zinc-400 cursor-pointer relative' onClick={() => setIsNav(b => !b)}>
                        {isMobile &&
                        <div className='relative h-full pointer-events-none'>
                            <XMarkIcon className={`transition-opacity duration-500 absolute ${isNav ? 'opacity-100' : 'opacity-0'}`} />
                            <Bars4Icon className={`transition-opacity  duration-500 absolute ${isNav ? 'opacity-0' : 'opacity-100'}`} />
                        </div>}
                    </button>
                }

            </div>
            <div className='flex flex-row w-full relative'>
                <div ref={smallNav} className={`flex flex-col text-xl w-full text-white gap-1 absolute bg-green-500 py-2 px-10 transition-transform transition-opacity ease-in-out duration-700 ${isNav && isMobile ? 'translate-y-0' : '-translate-y-72'}`}>
                    <Link href="/" className={buttonCol}>Home</Link>
                    <Link href="/" className={buttonCol}>About</Link>
                    <Link href="/" className={buttonCol}>Find</Link>
                    <Link href="/" className={buttonCol}>Contact</Link>
                </div>
            </div>
</nav>
        </>
    );
}

export default Navbar;