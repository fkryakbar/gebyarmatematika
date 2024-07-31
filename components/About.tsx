import Image from "next/image";
import Illustration from "./Illustration1";
import Link from "next/link";

export default function About() {
    return (
        <>
            <section id="tentang">
                <div className="lg:w-[80%] w-full p-2 mx-auto mt-10">
                    <div>
                        <h2 className="text-center text-[#005AAC] font-semibold text-4xl">
                            Throw Back Gebyar Matematika 2023
                        </h2>
                        <div className="rounded-full mx-auto w-[10%] h-1 bg-[#005AAC] mt-2"> </div>
                    </div>
                    <Link href={'https://youtu.be/1W5l0fZg2xg?si=M-HPCrJSag4UqlKn'} className="relative" target="_blank">
                        <div className="absolute right-[50%] top-[50px] translate-x-[50%]">
                            <div className="relative group w-fit">
                                <div className="absolute -inset-1 bg-gradient-to-br from-amber-600 to-amber-300 rounded-full blur group-hover:-inset-2 transition-all" />
                                <button className="relative p-2 rounded-full bg-amber-400 text-white w-20 h-20 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-w-8">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <Image src={'/Bookmarks-rafiki.svg'} alt="Illustration Video" width={200} height={200} className="mx-auto lg:w-[30%] w-full" />
                    </Link>
                </div>
                <div className="lg:w-[80%] w-full p-2 mx-auto mt-10">
                    <div>
                        <h2 className="text-center text-[#005AAC] font-semibold text-4xl">
                            Apa itu Gebyar Matematika?
                        </h2>
                        <div className="rounded-full mx-auto w-[10%] h-1 bg-[#005AAC] mt-2"> </div>
                    </div>
                    <div className="relative mt-5 border-[#005AAC] border-[3px] rounded-xl mx-auto lg:w-[60%] w-full drop-shadow-lg bg-white">
                        <Illustration className="absolute -top-[106px] right-0 hidden lg:block" />
                        <div className="flex gap-3 mt-5 ml-5">
                            <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                            <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                            <div className="w-5 h-5 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-center mt-3 px-5 pb-5 ">
                            <p>
                                <b>Gebyar Matematika</b> merupakan ajang kompetisi matematika yang diadakan oleh Himpunan Mahasiswa Pendidikan Matematika Fakultas Keguruan dan Ilmu Pendidikan Universitas Lambung Mangkurat.
                            </p>
                            <p className="mt-3">
                                Tujuan dari penyelenggaraan <b>Gebyar Matematika</b> adalah untuk meningkatkan kemampuan akademik dan menggali potensi diri siswa di bidang matematika. Diharapkan, kegiatan ini dapat menjadi motivasi bagi siswa-siswi untuk lebih berprestasi dalam studi matematika dan merangsang minat mereka dalam mengeksplorasi dunia matematika secara lebih mendalam.
                            </p>
                        </div>
                        <Illustration className="absolute -bottom-[27px] right-[25%] lg:hidden block" />
                        <div className="h-[90px] lg:hidden block"></div>
                    </div>
                </div>
            </section>
        </>
    )
}