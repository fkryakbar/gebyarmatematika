import Link from "next/link";
import Image from "next/image";
export default function Tutorial() {
    return (
        <>
            <section className="lg:w-[80%] w-full p-2 mx-auto">
                <div>
                    <h2 className="text-center text-[#005AAC] font-semibold text-4xl">
                        Tutorial Pendaftaran
                    </h2>
                    <p className="text-center text-[#005AAC] text-base">
                        Berikut merupakan Video Tutorial Pendaftaran
                    </p>
                    <div className="rounded-full mx-auto w-[10%] h-1 bg-[#005AAC] mt-2"> </div>
                </div>
                <Link href={'https://www.instagram.com/reel/Cv1IdhRtotM/?igsh=MWZ0bTZhMGJsMDB1ag=='} className="relative" target="_blank">
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
                    <Image src={'/Media player-bro.svg'} alt="Illustration Video" width={200} height={200} className="mx-auto lg:w-[30%] w-full" />
                </Link>
            </section>
        </>
    )
}