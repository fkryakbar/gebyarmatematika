import Image from "next/image"
export default function Contact() {
    return (
        <>
            <section className="bg-[url('/rose-petals.svg')] bg-no-repeat bg-cover relative pb-5" id="narahubung">
                <div className="lg:w-[80%] w-full p-2 mx-auto">
                    <div className="mt-10">
                        <h2 className="text-center text-white font-semibold text-4xl">
                            Narahubung
                        </h2>
                        <p className="text-center text-white text-base">
                            Punya Pertanyaan? Silahkan hubungi narahubung di bawah
                        </p>
                        <div className="rounded-full mx-auto w-[10%] h-1 bg-white mt-2"></div>
                    </div>
                    <div className="lg:flex gap-3 mt-5 items-center">
                        <div className="basis-1/2 flex justify-center">
                            <Image src={'/Internship-pana.svg'} alt="Illustration" width={450} height={450} />
                        </div>
                        <div className="basis-1/2">
                            <div className="bg-white rounded-lg mt-3 p-5 flex gap-4 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#005AAC]">
                                        <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                        <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#005AAC] text-2xl">
                                        Kuis Matematika
                                    </h3>
                                    <p className="font-bold">085124427963 (Muhammad Nasrullah)</p>

                                </div>
                            </div>
                            <div className="bg-white rounded-lg mt-3 p-5 flex gap-4 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#005AAC]">
                                        <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                        <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#005AAC] text-2xl">
                                        Cerdas Cermat Matematika
                                    </h3>
                                    <p className="font-bold">082181534698 (Alya Afifah)</p>

                                </div>
                            </div>
                            <div className="collapse bg-white rounded-lg mt-3">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold text-[#005AAC] text-2xl">
                                            Narahubung Tiap Rayon
                                        </h3>
                                        <div className="text-[#005AAC]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
                                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse-content">
                                    <ul className="list-decimal p-5">
                                        <li>
                                            Banjarmasin: Halimatus Sa&apos;diah (082298437841)
                                        </li>
                                        <li>
                                            Banjarbaru: Putri Maulidha (083843441061)
                                        </li>
                                        <li>
                                            Kab Banjar: Akhmad Fahreza (083127619542)
                                        </li>
                                        <li>
                                            Tapin & HSS: Nabila Faizah Haris (081226172485)
                                        </li>
                                        <li>
                                            Balangan & HST: Khalilurrahman (085822344248)
                                        </li>
                                        <li>
                                            HSU: Erfina (082149986813)
                                        </li>
                                        <li>
                                            Tabalong: Chelsya Elfira A (081253314227)
                                        </li>
                                        <li>
                                            Tanah Laut: Soefyah Wahyu P (081345405605)
                                        </li>
                                        <li>
                                            Tanah Bumbu: Cinta Anggun S (083829360047)
                                        </li>
                                        <li>
                                            Kotabaru: Anisa Nabilah (082353125754)
                                        </li>
                                        <li>
                                            Barito Kuala: Muhammad Ramadhani (089692766710)
                                        </li>
                                        <li>
                                            Palangkaraya: Chelsy Bild A. Kutin (085754387115)
                                        </li>
                                        <li>
                                            Sampit: Istiqomah Cahyabatin S(085787047282)
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="bg-white rounded-lg mt-3 p-5 flex gap-4 items-center">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="w-10 h-10 text-[#005AAC]"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#005AAC] text-2xl">
                                        Instagram
                                    </h3>
                                    <p className="font-bold">gebyarmatematika.ulm</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg mt-3 p-5 flex gap-4 items-center truncate">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="w-10 h-10 text-[#005AAC]"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                    </svg>

                                </div>
                                <div>
                                    <h3 className="font-bold text-[#005AAC] text-2xl">
                                        Email
                                    </h3>
                                    <p className="font-bold lg:text-base text-xs">gebyarmatematika.official@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}