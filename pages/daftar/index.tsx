import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";

export default function Daftar() {
    return (
        <>
            <Head>
                <title>Daftar Gebyar Matematika</title>
                <meta name="description" content="Gebyar Matematika merupakan ajang kompetisi matematika yang diadakan oleh Himpunan Mahasiswa Pendidikan Matematika Fakultas Keguruan dan Ilmu Pendidikan Universitas Lambung Mangkurat." />
            </Head>
            <Navbar />
            <section className="bg-[url('/liquid-cheese.svg')] bg-no-repeat bg-cover ">
                <div className='lg:w-[80%] w-full p-2 mx-auto lg:pt-32 pt-20'>
                    <div className="flex flex-col justify-center">
                        <div className="text-center">
                            <h1 className='lg:text-7xl text-5xl font-bold mt-2 text-white'>Pendaftaran Gebyar Matematika</h1>
                        </div>
                        <div className="flex gap-6 mt-5 mx-auto">
                            <Link href={'https://bit.ly/BukuPedomanGM2023'} target="_blank" className="bg-[#11b6e6] p-2 text-white rounded-lg font-bold text-xl flex items-center hover:bg-blue-900 transition-all active:scale-105 drop-shadow text-center">
                                Buku Panduan Gebyar Matematika
                            </Link>
                        </div>
                    </div>
                    <h4 className='font-semibold text-white text-center mt-5'>Berikut merupakan syarat dan ketentuan pendaftaran</h4>
                    <div className=" text-white w-full mt-10 mb-10">
                        <Link href={'#jenis'} scroll={false}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 animate-bounce mx-auto">
                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="lg:w-[80%] w-full p-2 mx-auto pt-10" id="jenis">
                <div>
                    <h2 className="text-center text-[#005AAC] font-semibold text-2xl">
                        Jenis Lomba
                    </h2>
                    <div className="rounded-full mx-auto w-[10%] h-1 bg-[#005AAC] mt-2"> </div>
                </div>
                <div className="flex gap-5 mt-5 lg:flex-row flex-col">
                    <div className="basis-1/2 p-5 rounded-lg bg-white drop-shadow-md cursor-pointer transition-all hover:bg-blue-100">
                        <div className="flex gap-3 justify-center mb-2">
                            <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                            <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                            <div className="w-5 h-5 rounded-full bg-green-400"></div>
                        </div>
                        <h4 className="text-center text-[#005AAC] font-semibold text-xl">Cerdas Cermat Matematika</h4>
                        <p className="text-center text-sm font-semibold">Beregu 3 Orang</p>
                        <div className="flex justify-center my-2">
                            <Link href={'http://bit.ly/Pendaftaran-CerdasCermatMatematika_GM2023'} target="_blank" className="btn btn-sm bg-green-400 text-white hover:bg-green-800">Daftar CCM</Link>
                        </div>
                        <div className="rounded-full mx-auto w-[10%] h-1 bg-[#005AAC] mt-2"></div>
                    </div>
                    <div className="basis-1/2 p-5 rounded-lg bg-white drop-shadow-md cursor-pointer transition-all hover:bg-blue-100">
                        <div className="flex gap-3 justify-center mb-2">
                            <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                            <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                            <div className="w-5 h-5 rounded-full bg-green-400"></div>
                        </div>
                        <h4 className="text-center text-[#005AAC] font-semibold text-xl">Kuis Matematika</h4>
                        <p className="text-center text-sm font-semibold">Individu</p>
                        <div className="flex justify-center my-2">
                            <Link href={'http://bit.ly/Pendaftaran-KuisMatematika_GM2023'} target="_blank" className="btn btn-sm bg-amber-400 text-white hover:bg-amber-800">Daftar KM</Link>
                        </div>
                        <div className="rounded-full mx-auto w-[10%] h-1 bg-[#005AAC] mt-2"> </div>
                    </div>
                </div>
            </section>
            <section className="lg:w-[80%] w-full p-2 mx-auto pt-10">
                <div>
                    <h2 className="text-center text-[#005AAC] font-semibold text-2xl">
                        Persyaratan Peserta
                    </h2>
                    <div className="rounded-full mx-auto w-[10%] h-1 bg-[#005AAC] mt-2"> </div>
                </div>
                <div className="lg:w-[50%] w-full mt-5 mx-auto p-5 rounded-lg bg-white drop-shadow-md cursor-pointer transition-all hover:bg-blue-100">
                    <div className="flex gap-3 justify-center mb-2">
                        <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                        <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                        <div className="w-5 h-5 rounded-full bg-green-400"></div>
                    </div>
                    <ul className="list-disc lg:px-10 px-5 mt-5 lg:text-base text-sm">
                        <li>
                            Peserta merupakan siswa/i SD, SMP dan SMA sederajat.
                        </li>
                        <li>
                            Peserta masih terdaftar sebagai siswa/i aktif pada saat Gebyar Matematika 2023 berlangsung
                        </li>
                        <li>
                            Peserta merupakan perwakilan sekolah atau mendaftar secara individu
                        </li>
                        <li>
                            Peserta memenuhi persyaratan pendaftaran
                        </li>
                        <li>
                            Peserta dilarang melakukan lintas tingkat
                        </li>
                        <li>
                            Peserta dapat mengikuti kedua cabang lomba
                        </li>
                        <li>
                            Setiap sekolah hanya boleh mengikuti penyisihan di satu rayon
                        </li>
                        <li>
                            Bagi peserta yang melanggar persyaratan peserta maka akan didiskualifikasi
                        </li>

                    </ul>
                </div>
            </section>
            <section className="lg:w-[80%] w-full p-2 mx-auto pt-10">
                <div>
                    <h2 className="text-center text-[#005AAC] font-semibold text-2xl">
                        Mekanisme Pendaftaran Online
                    </h2>
                    <div className="rounded-full mx-auto w-[10%] h-1 bg-[#005AAC] mt-2"> </div>
                </div>
                <div className="lg:w-[50%] w-full mt-5 mx-auto p-5 rounded-lg bg-white drop-shadow-md cursor-pointer transition-all hover:bg-blue-100">
                    <div className="flex gap-3 justify-center mb-2">
                        <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                        <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                        <div className="w-5 h-5 rounded-full bg-green-400"></div>
                    </div>
                    <ul className="list-disc lg:px-10 px-5 mt-5 lg:text-base text-sm">
                        <li>
                            Peserta membayar biaya pendaftaran sesuai dengan ketentuan. Uang pendaftaran dikirim via online kepada
                        </li>
                        <div className="border-gray-300 border-[1px] p-4 rounded-lg my-3">
                            <table className="w-full lg:text-base text-xs">
                                <tbody>
                                    <tr>
                                        <td className="font-semibold">
                                            Bank
                                        </td>
                                        <td>
                                            : Mandiri
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">
                                            No. Rekening
                                        </td>
                                        <td>
                                            : 1590006361744
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">
                                            Atas Nama
                                        </td>
                                        <td>
                                            : NUR ANNISA EPENDY
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <li>
                            Peserta mengisi google form, mengunggah bukti pembayaran, dan melengkapi berkas yang diperlukan pada <Link className="text-blue-500 underline hover:text-blue-800" href={'#jenis'} scroll={false}>link pendaftaran</Link>
                        </li>
                        <li>
                            Untuk pendaftaran secara kolektif hanya dapat dilakukan oleh pendaftar jenis lomba Kuis Matematika dari sekolah yang sama.
                        </li>
                        <li>
                            Peserta melakukan konfirmasi pendaftaran sesuai dengan format yang sudah ditentukan disertai dengan mengirimkan bukti pembayaran ke Contact Person (CP) rayon yang tertera.
                        </li>
                    </ul>
                </div>
            </section>
            <section className="lg:w-[80%] w-full p-2 mx-auto pt-10 pb-10">
                <div>
                    <h2 className="text-center text-[#005AAC] font-semibold text-2xl">
                        Format Konfirmasi Pendaftaran
                    </h2>
                    <div className="rounded-full mx-auto w-[10%] h-1 bg-[#005AAC] mt-2"> </div>
                </div>
                <div className="lg:w-[50%] w-full mt-5 mx-auto p-5 rounded-lg bg-white drop-shadow-md cursor-pointer transition-all hover:bg-blue-100">
                    <div className="flex gap-3 justify-center mb-2">
                        <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                        <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                        <div className="w-5 h-5 rounded-full bg-green-400"></div>
                    </div>
                    <ul className="list-disc lg:px-10 px-5 mt-5 lg:text-base text-sm">
                        <li className="font-semibold">
                            CERDAS CERMAT MATEMATIKA
                        </li>
                        <div className="border-gray-300 border-[1px] p-2 rounded-lg my-3">
                            <p>
                                Nama Penyetor # Nama Sekolah # CCM # Gelombang # Tanggal dan Waktu Pengiriman # Nama Lengkap Peserta # Nominal Pengiriman
                            </p>
                            <p className="mt-3">
                                Contoh : Zuraida Latifah # SMA 1 Lambung Mangkurat # CCM # Gelombang 2 # 20 Agustus 2023 10.00 # 1. Isnani Maulida 2. Tri Muthoharoh 3. Nina Mardani # Rp170.000
                            </p>
                        </div>
                        <li className="font-semibold">
                            KUIS MATEMATIKA
                        </li>
                        <div className="border-gray-300 border-[1px] p-2 rounded-lg my-3">
                            <h5 className="font-semibold">Individu</h5>
                            <p>
                                Nama Penyetor # Nama Sekolah # Kuis # Gelombang # Tanggal dan Waktu Pengiriman # Nama Lengkap Peserta # Nominal Pengiriman
                            </p>
                            <p className="mt-3">
                                Contoh : Muamar Nasrullah Jayatri # SMA 1 Lambung Mangkurat # Kuis # Gelombang 2 # 20 Agustus 2023 10.00  # Tri Muthoharoh #Rp90.000
                            </p>
                            <h5 className="font-semibold mt-4">Kolektif</h5>
                            <p>
                                Nama Penyetor # Nama Sekolah # Kuis # Gelombang # Tanggal dan Waktu Pengiriman # Jumlah Delegasi # Nama Lengkap Peserta # Nominal Pengiriman
                            </p>
                            <p className="mt-3">
                                Contoh : Isnani Maulida # SMA 1 Lambung Mangkurat # Kuis # Gelombang 2 # 20 Agustus 2023 10.00 # 5 orang # 1. Nina Mardani 2. Tri Muthoharoh 3. Zuraida Latifah 4. Muamar Nasrullah Jayatri 5. Fitry Hayuni Gimelia # Rp450.000
                            </p>
                        </div>
                        <li className="font-semibold">
                            Keterangan Tambahan
                        </li>
                        <ul className="list-disc p-3">
                            <li>
                                Peserta diharapkan mengisi formulir pendaftaran dengan lengkap dan benar sesuai yang tertera pada link formulir pendaftaran.
                            </li>
                            <li>
                                Peserta Menunggu WhatsApp dari Panitia maksimal 3 x 24 jam sejak mengisi formulir pendaftaran
                            </li>
                            <li>
                                Setelah mendapat WhatsApp berupa kartu peserta, maka peserta secara resmi terdaftar sebagai peserta lomba Gebyar Matematika 2023.
                            </li>
                        </ul>
                    </ul>
                </div>
            </section>
            <Contact />
            <Footer />
        </>
    )
}