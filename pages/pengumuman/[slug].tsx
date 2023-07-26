import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
export async function getStaticPaths() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/v1/collection/gm23/slug`, {
        headers: {
            'Public-Key': `${process.env.NEXT_PUBLIC_CMS_TOKEN}`
        }
    })
    const posts = await data.json();

    const paths = posts.data.map((post: any) => ({
        params: { slug: post.slug }
    }))
    return { paths, fallback: 'blocking' }

}
export const getStaticProps = async (context: any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/v1/collection/gm23/read/${context.params.slug}`, {
        headers: {
            'Public-Key': `${process.env.NEXT_PUBLIC_CMS_TOKEN}`
        }
    });
    const data = await res.json()
    return {
        props: data
    }
}
function dateConvert(date: string) {
    const dt = new Date(date);
    return dt.toLocaleString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })
}
export default function Slug({ data }: { data: any }) {

    return <>
        <Head>
            <title>Pengumuman Gebyar Matematika</title>
        </Head>
        <Navbar />
        <section className="bg-[url('/liquid-cheese.svg')] bg-no-repeat bg-cover ">
            <div className='lg:w-[80%] w-full p-2 mx-auto lg:pt-32 pt-20'>
                <div className="flex flex-col justify-center">
                    <div className="text-center">
                        <h1 className='lg:text-7xl text-3xl font-bold mt-2 text-white'>{data.title}</h1>
                    </div>
                    <div className="flex gap-6 mt-5 mx-auto">
                        <div className="bg-[#11b6e6] p-2 text-white rounded-lg font-bold lg:text-xl flex gap-2 items-center hover:bg-blue-900 transition-all active:scale-105 drop-shadow text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                            {dateConvert(data.created_at)}
                        </div>
                    </div>
                </div>
                <h4 className='font-semibold text-white text-center mt-5 mb-5 lg:text-base text-sm'>{data.description}</h4>
            </div>
        </section>
        <section className="lg:w-[50%] w-full p-2 mx-auto ">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link href={'/'} className="text-[#005AAC]">Beranda</Link></li>
                    <li><Link href={'/pengumuman'} className="text-[#005AAC]">Pengumuman</Link></li>
                    <li>Detail</li>
                </ul>
            </div>
            <div className="mt-3" dangerouslySetInnerHTML={{ __html: data.content }}>
            </div>
        </section>
        <Contact />
        <Footer />
    </>


}