import useScroll from "@/libs/useScroll";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    const y = useScroll()
    return (
        <>
            <nav className={`fixed top-0 w-full z-[1000] font-semibold ${y > 20 ? 'bg-[#005AAC] drop-shadow' : ''} transition-all`}>
                <div className="lg:w-[80%] w-full p-2 mx-auto flex justify-between items-center">
                    <Link href={'/'} className="flex gap-2 items-center hover:bg-[#005AAC] transition-all p-2 rounded">
                        <Image src={'/GM.png'} width={100} height={100} alt="main logo" className="lg:w-14 w-10" />
                        <div className="text-white">
                            <p className="font-bold lg:text-base text-sm">Gebyar Matematika 2023</p>
                            <p className="lg:text-sm text-xs">HIMAPTIKA FKIP ULM</p>
                        </div>
                    </Link>
                    <div className="lg:flex hidden gap-3 text-white text-sm">
                        <div>
                            <Link href={'/'}>Beranda</Link>
                        </div>
                        <div>
                            <Link href={'/daftar'}>Daftar</Link>
                        </div>
                        <div>
                            <Link href={'/#tentang'} scroll={false}>Tentang</Link>
                        </div>
                        <div>
                            <Link href={'/pengumuman'}>Pengumuman</Link>
                        </div>
                        <div>
                            <Link href={'/#faq'} scroll={false}>FAQ</Link>
                        </div>
                        <div>
                            <Link href={'/#narahubung'} scroll={false}>Narahubung</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

