import Image from 'next/image';
import useSWRImmutable from 'swr/immutable'

const fetcher = (url: string) => fetch(url, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'public-key': `${process.env.NEXT_PUBLIC_ETHINGS_TOKEN}`
    }
}).then(r => r.json())

const Loading = () => {
    return (
        <>
            <div className="w-20 h-20 bg-slate-200 rounded-lg  animate-pulse"></div>
            <div className="w-20 h-20 bg-slate-200 rounded-lg  animate-pulse"></div>
            <div className="w-20 h-20 bg-slate-200 rounded-lg  animate-pulse"></div>
            <div className="w-20 h-20 bg-slate-200 rounded-lg  animate-pulse"></div>
            <div className="w-20 h-20 bg-slate-200 rounded-lg  animate-pulse"></div>
            <div className="w-20 h-20 bg-slate-200 rounded-lg  animate-pulse"></div>
        </>
    )
}

export default function Sponsors() {
    const sponsors = useSWRImmutable(`${process.env.NEXT_PUBLIC_ETHINGS_API}/api/public/view/TiFe-1gE-SVa`, fetcher);
    const mediaPartners = useSWRImmutable(`${process.env.NEXT_PUBLIC_ETHINGS_API}/api/public/view/QzTr-eOb-jCl`, fetcher);

    return (
        <>
            <section className="lg:w-[80%] w-full p-2 mx-auto my-10">
                <div className="lg:flex gap-5 ">
                    <div className="basis-1/2 bg-white drop-shadow rounded-lg p-5">
                        <div className="flex justify-between">
                            <div className="w-full">
                                <h2 className="text-2xl font-bold text-[#005AAC]">
                                    Sponsors
                                </h2>
                                <div className="rounded-full w-[15%] h-1 bg-[#005AAC] mt-2"> </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                                <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                                <div className="w-5 h-5 rounded-full bg-green-400"></div>
                            </div>
                        </div>
                        <div className="mt-5 flex gap-3 flex-wrap justify-center">
                            {
                                sponsors.isLoading ? (<Loading />) : sponsors.data.data.map((item: any, key: number) => {
                                    return (
                                        <div className='w-20' key={key}>
                                            <Image width={100} height={100} src={`${process.env.NEXT_PUBLIC_ETHINGS_API}/api/public/download/${item.item_id}`} alt={`${item.name}`} />
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </div>
                    <div className="basis-1/2 bg-white drop-shadow rounded-lg p-5 lg:mt-0 mt-5">
                        <div className="flex justify-between">
                            <div className="flex gap-3">
                                <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                                <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                                <div className="w-5 h-5 rounded-full bg-green-400"></div>
                            </div>
                            <div className="">
                                <h2 className="text-2xl font-bold text-[#005AAC]">
                                    Media Partner
                                </h2>
                                <div className="rounded-full float-right w-[25%] h-1 bg-[#005AAC] mt-2"> </div>
                            </div>
                        </div>
                        <div className="mt-5 flex gap-3 flex-wrap justify-center">
                            {
                                mediaPartners.isLoading ? (<Loading />) : mediaPartners.data.data.map((item: any, key: number) => {
                                    return (
                                        <div className='w-20' key={key}>
                                            <Image width={100} height={100} src={`${process.env.NEXT_PUBLIC_ETHINGS_API}/api/public/download/${item.item_id}`} alt={`${item.name}`} />
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

