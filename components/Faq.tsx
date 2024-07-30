export default function Faq() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1677D2" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,133.3C672,149,768,171,864,192C960,213,1056,235,1152,250.7C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <section className=" bg-[#1677D2] mt-[-1px]" id="faq">
                <div className="lg:w-[75%] w-full p-2 mx-auto">
                    <div className="lg:flex gap-5">
                        <div className="relative basis-1/2 mb-4">
                            <div className="sticky top-[100px] bg-white p-5 lg:rounded-lg rounded-full drop-shadow flex justify-between items-center">
                                <div className="w-full">
                                    <h2 className="text-[#005AAC] font-semibold text-2xl text-center lg:text-left">
                                        Timeline
                                    </h2>
                                    <div className="rounded-full lg:mx-0 mx-auto w-[20%] h-1 bg-[#005AAC] mt-1"> </div>
                                </div>
                                <div className="text-[#1677D2] hidden lg:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
                                        <path fillRule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative basis-1/2">
                            <div className="border-r-4 border-[#11b6e6] absolute h-full top-0" style={{ 'left': '9px' }}></div>
                            <ul className="list-none m-0 p-0">
                                <li className="mb-5 ">
                                    <div className="flex group items-center ">
                                        <div className="bg-[#005AAC] group-hover:bg-blue-900 z-10 rounded-full border-4 border-[#11b6e6] h-5 w-5">
                                            <div className="bg-[#11b6e6] h-1 w-6 items-center  ml-4 mt-1"></div>
                                        </div>
                                        <div className="flex-1 ml-4 z-10 font-medium">
                                            <div className="order-1 bg-white rounded-lg shadow-only transition-ease w-full px-6 py-4 drop-shadow">
                                                <div className="flex justify-between items-center flex-wrap">
                                                    <h3 className="font-bold text-[#005AAC] text-2xl">Penyisihan</h3>
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                                                        <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                                                        <div className="w-5 h-5 rounded-full bg-green-400"></div>
                                                    </div>
                                                </div>
                                                <p className="pb-4 mt-2 text-sm text-gray-800">05 Oktober 2024
                                                </p>
                                                {/* <hr />
                        <p className="text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-5 ">
                                    <div className="flex group items-center ">
                                        <div className="bg-[#005AAC] group-hover:bg-blue-900 z-10 rounded-full border-4 border-[#11b6e6] h-5 w-5">
                                            <div className="bg-[#11b6e6] h-1 w-6 items-center  ml-4 mt-1"></div>
                                        </div>
                                        <div className="flex-1 ml-4 z-10 font-medium">
                                            <div className="order-1 bg-white rounded-lg shadow-only transition-ease w-full px-6 py-4 drop-shadow">
                                                <div className="flex justify-between items-center flex-wrap">
                                                    <h3 className="font-bold text-[#005AAC] text-2xl">Semifinal CCM SD</h3>
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                                                        <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                                                        <div className="w-5 h-5 rounded-full bg-green-400"></div>
                                                    </div>
                                                </div>
                                                <p className="pb-4 mt-2 text-sm text-gray-800">04 Novermber 2024
                                                </p>
                                                {/* <hr />
                        <p className="text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-5 ">
                                    <div className="flex group items-center ">
                                        <div className="bg-[#005AAC] group-hover:bg-blue-900 z-10 rounded-full border-4 border-[#11b6e6] h-5 w-5">
                                            <div className="bg-[#11b6e6] h-1 w-6 items-center  ml-4 mt-1"></div>
                                        </div>
                                        <div className="flex-1 ml-4 z-10 font-medium">
                                            <div className="order-1 bg-white rounded-lg shadow-only transition-ease w-full px-6 py-4 drop-shadow">
                                                <div className="flex justify-between items-center flex-wrap">
                                                    <h3 className="font-bold text-[#005AAC] text-2xl">Semifinal CCM SMP dan SMA</h3>
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                                                        <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                                                        <div className="w-5 h-5 rounded-full bg-green-400"></div>
                                                    </div>
                                                </div>
                                                <p className="pb-4 mt-2 text-sm text-gray-800">05 Novermber 2024
                                                </p>
                                                {/* <hr />
                        <p className="text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-5 ">
                                    <div className="flex group items-center ">
                                        <div className="bg-[#005AAC] group-hover:bg-blue-900 z-10 rounded-full border-4 border-[#11b6e6] h-5 w-5">
                                            <div className="bg-[#11b6e6] h-1 w-6 items-center  ml-4 mt-1"></div>
                                        </div>
                                        <div className="flex-1 ml-4 z-10 font-medium">
                                            <div className="order-1 bg-white rounded-lg shadow-only transition-ease w-full px-6 py-4 drop-shadow">
                                                <div className="flex justify-between items-center flex-wrap">
                                                    <h3 className="font-bold text-[#005AAC] text-2xl">Final CCM SD, SMP, dan SMA</h3>
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                                                        <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                                                        <div className="w-5 h-5 rounded-full bg-green-400"></div>
                                                    </div>
                                                </div>
                                                <p className="pb-4 mt-2 text-sm text-gray-800">06 November 2024</p>
                                                {/* <hr />
                        <p className="text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-5 ">
                                    <div className="flex group items-center ">
                                        <div className="bg-[#005AAC] group-hover:bg-blue-900 z-10 rounded-full border-4 border-[#11b6e6] h-5 w-5">
                                            <div className="bg-[#11b6e6] h-1 w-6 items-center  ml-4 mt-1"></div>
                                        </div>
                                        <div className="flex-1 ml-4 z-10 font-medium">
                                            <div className="order-1 bg-white rounded-lg shadow-only transition-ease w-full px-6 py-4 drop-shadow">
                                                <div className="flex justify-between items-center flex-wrap">
                                                    <h3 className="font-bold text-[#005AAC] text-2xl">Semifinal Kuis Matematika</h3>
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                                                        <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                                                        <div className="w-5 h-5 rounded-full bg-green-400"></div>
                                                    </div>
                                                </div>
                                                <p className="pb-4 mt-2 text-sm text-gray-800">07 November 2024</p>
                                                {/* <hr />
                        <p className="text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-5 ">
                                    <div className="flex group items-center ">
                                        <div className="bg-[#005AAC] group-hover:bg-blue-900 z-10 rounded-full border-4 border-[#11b6e6] h-5 w-5">
                                            <div className="bg-[#11b6e6] h-1 w-6 items-center  ml-4 mt-1"></div>
                                        </div>
                                        <div className="flex-1 ml-4 z-10 font-medium">
                                            <div className="order-1 bg-white rounded-lg shadow-only transition-ease w-full px-6 py-4 drop-shadow">
                                                <div className="flex justify-between items-center flex-wrap">
                                                    <h3 className="font-bold text-[#005AAC] text-2xl">08 November 2024
                                                    </h3>
                                                    <div className="flex gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                                                        <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                                                        <div className="w-5 h-5 rounded-full bg-green-400"></div>
                                                    </div>
                                                </div>
                                                <p className="pb-4 mt-2 text-sm text-gray-800">3 November 2023</p>
                                                {/* <hr />
                        <p className="text-sm font-medium leading-snug tracking-wide text-gray-800 text-opacity-100">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:flex gap-5 mt-10">
                        <div className="relative basis-1/2 mb-4">
                            <div className="sticky top-[100px] bg-white p-5 lg:rounded-lg rounded-full drop-shadow flex justify-between items-center">
                                <div className="w-full">
                                    <h2 className="text-[#005AAC] font-semibold text-2xl text-center lg:text-left">
                                        Biaya Pendaftaran
                                    </h2>
                                    <div className="rounded-full lg:mx-0 mx-auto w-[20%] h-1 bg-[#005AAC] mt-1"> </div>
                                </div>
                                <div className="text-[#1677D2] hidden lg:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
                                        <path fillRule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="relative basis-1/2">
                            <div className="collapse bg-white rounded-lg">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold text-[#005AAC] text-2xl">
                                            Timeline Pendaftaran
                                        </h3>
                                        <div className="text-[#005AAC]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
                                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse-content">
                                    <div className="mb-2">
                                        <p className="font-semibold">Gelombang 1</p>
                                        <p>1 Agustus - 17 Agustus 2024
                                        </p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Gelombang 2</p>
                                        <p>18 Agustus - 31 Agustus 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse bg-white rounded-lg mt-3">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold text-[#005AAC] text-2xl">
                                            CCM SD
                                        </h3>
                                        <div className="text-[#005AAC]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
                                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse-content">
                                    <div className="mb-2">
                                        <p className="font-semibold">Gelombang 1</p>
                                        <p>Rp 130.000</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Gelombang 2</p>
                                        <p>Rp140.000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse bg-white rounded-lg mt-3">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold text-[#005AAC] text-2xl">
                                            CCM SMP & SMA
                                        </h3>
                                        <div className="text-[#005AAC]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
                                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse-content">
                                    <div className="mb-2">
                                        <p className="font-semibold">Gelombang 1</p>
                                        <p>Rp160.000</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Gelombang 2</p>
                                        <p>Rp170.000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse bg-white rounded-lg mt-3">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold text-[#005AAC] text-2xl">
                                            Kuis Matematika SMP & SMA
                                        </h3>
                                        <div className="text-[#005AAC]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
                                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse-content">
                                    <div className="mb-2">
                                        <p className="font-semibold">Gelombang 1</p>
                                        <p>Rp85.000</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Gelombang 2</p>
                                        <p>Rp95.000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse bg-white rounded-lg mt-3">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold text-[#005AAC] text-2xl">
                                            Kuis Matematika SD
                                        </h3>
                                        <div className="text-[#005AAC]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
                                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse-content">
                                    <div className="mb-2">
                                        <p className="font-semibold">Gelombang 1</p>
                                        <p>Rp65.000</p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="font-semibold">Gelombang 2</p>
                                        <p>Rp75.000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1677D2" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,85.3C384,117,480,171,576,176C672,181,768,139,864,117.3C960,96,1056,96,1152,85.3C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </>
    )
}