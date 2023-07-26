import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/v1/collection/gm23/slug?paginate=10`, {
        headers: {
            'Public-Key': `${process.env.NEXT_PUBLIC_CMS_TOKEN}`
        }
    });
    const data = await res.json()
    return {
        props: data,
        revalidate: 10
    }
}
function dateConvert(date: string) {
    const dt = new Date(date);
    return dt.toLocaleString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' })
}
export default function Page({ data }: { data: { data: Array<any> } }) {

    return (
        <>
            <Head>
                <title>Pengumuman Gebyar Matematika</title>
            </Head>
            <Navbar />
            <section className="bg-[url('/liquid-cheese.svg')] bg-no-repeat bg-cover ">
                <div className='lg:w-[80%] w-full p-2 mx-auto pt-28'>
                    <div className="lg:flex gap-3 flex-wrap">
                        <div className="basis-[48%] flex justify-center flex-col">
                            <h1 className='lg:text-7xl text-4xl text-center lg:text-left font-bold mt-2 text-white'>Pengumuman</h1>
                            <h4 className='font-semibold text-white text-center lg:text-left mt-5'>Berikut merupakan pengumuman penting seputar Gebyar Matematika</h4>
                        </div>
                        <div className="basis-[48%] flex justify-center w-full">
                            <Image src={'/Reading list-rafiki.svg'} alt="info" width={400} height={400} className="lg:w-[400px] w-full" />
                        </div>
                    </div>
                    <div className=" text-white w-full mt-10 mb-10">
                        <Link href={'#pengumuman'} scroll={false}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 animate-bounce mx-auto">
                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='lg:w-[80%] w-full p-2 mx-auto mt-5' id="pengumuman">
                {
                    data.data.map((post, key) => {
                        return (
                            <div key={key} className=" bg-[#005AAC] p-3 rounded-lg hover:bg-[#11b6e6] transition-all text-white mb-3">
                                <Link href={`/pengumuman/${post.slug}`} className="flex w-full">
                                    <div className="basis-[20%] lg:basis-[15%] text-center border-r-2 border-white p-2 flex items-center justify-center">
                                        {dateConvert(post.created_at)}
                                    </div>
                                    <div className="p-3">
                                        <p className="lg:text-2xl text-lg font-semibold lg:line-clamp-2 line-clamp-3">
                                            {post.title}
                                        </p>
                                    </div>
                                </Link >
                            </div >
                        )
                    })
                }
                {
                    data.data.length == 0 ? (
                        <>
                            <div className="my-5 flex justify-center items-center flex-col p-5 text-[#005AAC] border-[1px] border-gray-200 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-1w-16">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>
                                <p className="text-sm">
                                    Belum ada pengumuman
                                </p>
                            </div>
                        </>
                    ) : null
                }
            </section >
            <Contact />
            <Footer />
        </>
    )
}