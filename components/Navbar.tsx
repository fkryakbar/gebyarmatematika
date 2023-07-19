import useScroll from "@/libs/useScroll";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
export default function Navbar() {
    const [isShowing, setIsShowing] = useState(false);
    const y = useScroll()
    const handleResize = () => {
        if (window.innerWidth > 1024) {
            setIsShowing(false)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <nav className={`fixed top-0 w-full z-[1000] font-semibold ${y > 20 ? 'bg-[#005AAC] drop-shadow' : ''} ${isShowing ? 'bg-[#005AAC] drop-shadow' : ''} transition-all`}>
                <div className="lg:w-[80%] w-full p-2 mx-auto lg:flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <Link href={'/'} className="flex gap-2 items-center hover:bg-[#005AAC] transition-all p-2 rounded">
                            <Image src={'/GM.png'} width={100} height={100} alt="main logo" className="lg:w-14 w-10" />
                            <div className="text-white">
                                <p className="font-bold lg:text-base text-sm">Gebyar Matematika 2023</p>
                                <p className="lg:text-sm text-xs">HIMAPTIKA FKIP ULM</p>
                            </div>
                        </Link>
                        <button onClick={e => { setIsShowing(!isShowing) }} className={`btn ${y > 20 ? 'bg-[#005AAC]' : 'bg-transparent'} hover:bg-blue-900 text-white border-0 lg:hidden`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <Transition
                        show={isShowing}
                        enter="transition-all duration-200"
                        enterFrom="h-0"
                        enterTo="h-[200px]"
                        leave="transition-all duration-200"
                        leaveFrom="h-[200px]"
                        leaveTo="h-0"
                        className={'overflow-clip'}
                    >
                        <NavMenu />
                    </Transition>
                    <NavMenu className="hidden lg:flex" />
                </div>
            </nav>
        </>
    )
}

