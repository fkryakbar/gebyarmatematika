import Link from "next/link";
import Image from "next/image";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { motion } from "framer-motion"
import '@splidejs/react-splide/css';
export default function Hero() {
    return (<>
        <section className="bg-[url('/liquid-cheese.svg')] bg-no-repeat bg-cover lg:h-screen">
            <div className='lg:w-[80%] w-full p-2 mx-auto lg:pt-44 pt-20'>
                <div className="lg:flex flex-wrap">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="basis-1/2 flex flex-col justify-center">
                        <div
                            className="lg:text-left text-center">
                            <h1 className='lg:text-7xl text-5xl font-bold mt-2 text-white'>Gebyar Matematika 2024</h1>
                            <h5 className='font-semibold  text-white text-base mt-2'>SEMESTA: Semarakkan Ekspresi Matematika, Satukan Energi Menuju Prestasi Tak Terhingga</h5>
                        </div>
                        <div className="flex gap-6 mt-5 mx-auto lg:mx-0">
                            <Link href={'/daftar'} className="bg-[#11b6e6] p-2 text-white rounded-lg font-bold text-xl flex items-center hover:bg-blue-900 transition-all active:scale-105 drop-shadow">
                                Daftar Sekarang
                            </Link>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-br from-amber-600 to-amber-300 rounded-full blur group-hover:-inset-2 transition-all" />
                                <Link target="_blank" href="https://www.instagram.com/p/C9edFQIPdRW/?igsh=MTdpamZqNXgycWd1Yg==">
                                    <button className="relative p-2 rounded-full bg-amber-400 text-white w-16 h-16 flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="basis-1/2 mt-10">
                        <Splide aria-label="My Favorite Images" className="w-[80%] mx-auto drop-shadow-lg rounded-lg overflow-clip">
                            <SplideSlide>
                                <Image src={'/dokumentasi/3.JPG'} alt="dokumentasi" width={500} height={500} className="w-full rounded-lg" />
                            </SplideSlide>
                            <SplideSlide>
                                <Image src={'/dokumentasi/4.JPG'} alt="dokumentasi" width={500} height={500} className="w-full rounded-lg" />
                            </SplideSlide>
                            <SplideSlide>
                                <Image src={'/dokumentasi/5.JPG'} alt="dokumentasi" width={500} height={500} className="w-full rounded-lg" />
                            </SplideSlide>
                            <SplideSlide>
                                <Image src={'/dokumentasi/6.JPG'} alt="dokumentasi" width={500} height={500} className="w-full rounded-lg" />
                            </SplideSlide>
                            <SplideSlide>
                                <Image src={'/dokumentasi/7.JPG'} alt="dokumentasi" width={500} height={500} className="w-full rounded-lg" />
                            </SplideSlide>
                            <SplideSlide>
                                <Image src={'/dokumentasi/8.JPG'} alt="dokumentasi" width={500} height={500} className="w-full rounded-lg" />
                            </SplideSlide>
                            <SplideSlide>
                                <Image src={'/dokumentasi/9.JPG'} alt="dokumentasi" width={500} height={500} className="w-full rounded-lg" />
                            </SplideSlide>
                            <SplideSlide>
                                <Image src={'/dokumentasi/10.JPG'} alt="dokumentasi" width={500} height={500} className="w-full rounded-lg" />
                            </SplideSlide>
                        </Splide>
                    </motion.div>
                </div>
                <div className=" text-white w-full lg:mt-20 mt-10">
                    <Link href={'/#tentang'} scroll={false}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 animate-bounce mx-auto">
                            <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    </>)
}