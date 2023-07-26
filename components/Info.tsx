import Link from "next/link";
function dateConvert(date: string) {
    const dt = new Date(date);
    return dt.toLocaleString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' })
}
export default function Info({ data }: { data: Array<any> }) {

    return <>
        <section className="lg:w-[80%] w-full p-2 mx-auto mb-[40px]">
            <div>
                <h2 className="text-center text-[#005AAC] font-semibold text-4xl">
                    Pengumuman Penting
                </h2>
                <div className="rounded-full mx-auto w-[10%] h-1 bg-[#005AAC] mt-2"> </div>
            </div>
            <div className="mt-5 flex gap-3 flex-wrap text-white p-5 border-[1px] border-gray-200 rounded-lg">

                {
                    data.length > 0 ? data.map((post, key) => {
                        return (
                            <Link key={key} href={`/pengumuman/${post.slug}`} className="lg:basis-[49%] basis-[100%] bg-[#005AAC] p-3 rounded-lg hover:bg-[#11b6e6] transition-all">
                                <div className="flex">
                                    <div className="basis-[20%] text-center border-r-2 border-white p-2 flex items-center">
                                        {dateConvert(post.created_at)}
                                    </div>
                                    <div className="p-3">
                                        <p className="lg:text-2xl text-lg font-semibold lg:line-clamp-2 line-clamp-3">
                                            {post.title}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }) : (
                        <div className="mt-5 flex justify-center items-center flex-col p-5 text-[#005AAC] border-[1px] border-gray-200 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-1w-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                            <p className="text-sm">
                                Belum ada pengumuman
                            </p>
                        </div>
                    )
                }

            </div>

            <div className="flex justify-center">
                <Link href={'/pengumuman'} className="btn bg-[#005AAC] text-white capitalize btn-sm rounded-full mt-3 hover:bg-blue-900">Pengumuman Lainnya</Link>
            </div>
        </section>

    </>
}