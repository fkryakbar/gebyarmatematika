import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion"

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
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center">
                        <div className="text-center">
                            <h1 className='lg:text-7xl text-5xl font-bold mt-2 text-white'>Pendaftaran Gebyar Matematika</h1>
                        </div>
                        <div className="flex gap-6 mt-5 mx-auto">
                            <Link href={'https://bit.ly/BukuPedomanGM2025'} target="_blank" className="bg-[#11b6e6] p-2 text-white rounded-lg font-bold text-xl flex items-center hover:bg-blue-900 transition-all active:scale-105 drop-shadow text-center">
                                Buku Panduan Gebyar Matematika
                            </Link>
                        </div>
                        <div className="flex gap-6 mt-5 mx-auto">
                            <Link href={'https://bit.ly/BukuPanduanEsai2025'} target="_blank" className="bg-[#11b6e6] p-2 text-white rounded-lg font-bold text-xl flex items-center hover:bg-blue-900 transition-all active:scale-105 drop-shadow text-center">
                                Buku Panduan Esai
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h4 className='font-semibold text-white text-center mt-5'>Berikut merupakan syarat dan ketentuan pendaftaran</h4>
                    </motion.div>
                    <div className=" text-white w-full mt-10 mb-10">
                        <Link href={'#jenis'} scroll={false}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 animate-bounce mx-auto">
                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:w-[80%] w-full p-2 mx-auto pt-10" id="jenis">
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
                            <Link href={'https://bit.ly/PendaftaranCCMGM2025'} target="_blank" className="btn btn-sm bg-green-400 text-white hover:bg-green-800">Daftar CCM</Link>
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
                            <Link href={'https://bit.ly/PendaftaranKuisGM2025'} target="_blank" className="btn btn-sm bg-amber-400 text-white hover:bg-amber-800">Daftar KM</Link>
                        </div>
                        <div className="rounded-full mx-auto w-[10%] h-1 bg-[#005AAC] mt-2"> </div>
                    </div>
                    <div className="basis-1/2 p-5 rounded-lg bg-white drop-shadow-md cursor-pointer transition-all hover:bg-blue-100">
                        <div className="flex gap-3 justify-center mb-2">
                            <div className="w-5 h-5 rounded-full bg-blue-700"></div>
                            <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                            <div className="w-5 h-5 rounded-full bg-green-400"></div>
                        </div>
                        <h4 className="text-center text-[#005AAC] font-semibold text-xl">Esai</h4>
                        <p className="text-center text-sm font-semibold">Individu</p>
                        <div className="flex justify-center my-2">
                            <Link href={'https://bit.ly/PendaftaranEsaiGM2025'} target="_blank" className="btn btn-sm bg-blue-400 text-white hover:bg-blue-800">Daftar Esai</Link>
                        </div>
                        <div className="rounded-full mx-auto w-[10%] h-1 bg-[#005AAC] mt-2"> </div>
                    </div>
                </div>
            </motion.section>
            <section className="lg:w-[80%] w-full p-2 mx-auto pt-10">
                <div>
                    <h2 className="text-center text-[#005AAC] font-semibold text-2xl">
                        Persyaratan Peserta CCM & KUIS
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
                            Peserta masih terdaftar sebagai siswa/i aktif pada saat Gebyar Matematika 2025 berlangsung
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
                        Persyaratan Peserta Esai
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
                            Peserta beranggotakan maksimal 2 orang.
                        </li>
                        <li>
                            Peserta merupakan mahasiswa aktif S1 Pendidikan Matematika yang dibuktikan dengan scan KTM                        </li>
                        <li>
                            Setiap peserta hanya diperbolehkan mengirimkan satu karya esai
                        </li>
                        <li>
                            Naskah yang dikirimkan adalah karya asli (orisinal) yang belum pernah dipublikasikan dan tidak sedang diikutsertakan dalam lomba lain
                        </li>
                        <li>
                            Melakukan pendaftaran dan pembayaran melalui link yang tersedia
                        </li>
                    </ul>
                </div>
            </section>
            <section className="lg:w-[80%] w-full p-2 mx-auto pt-10">
                <div>
                    <h2 className="text-center text-[#005AAC] font-semibold text-2xl">
                        Alur Pendaftaran dan Pengumpulan Hasil Karya ESAI
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
                            Pendaftaran dibuka dan dapat diakses secara daring sejak tanggal 01 Juli 2025 - 24 Juli 2025
                        </li>
                        <li>
                            Peserta dapat melunasi Pembayaran dengan Mentransfer uang Pendaftaran melalui:
                            <br />
                            Bank : Bank Nasional Indonesia (BNI)
                            <br />
                            No. Rekening : 0568609437
                            <br />
                            Atas Nama : Nur Fitria Khanani
                        </li>
                        <li>
                            Konfirmasi bukti pelunasan melalui nomor: (0895703423016 a.n Nur Fitria Khanani)
                        </li>
                        <li>
                            Mendaftar dengan mengisi formulir pendaftaran melalui <Link className="text-blue-500 underline hover:text-blue-800" href={'#jenis'} scroll={false}>link pendaftaran</Link> Esai
                        </li>
                        <li>
                            Mengunggah bukti pelunasan pembayaran
                        </li>
                        <li>
                            Mengunggah pas foto formal ukuran 3 x 4
                        </li>
                        <li>
                            Melakukan konfirmasi pendaftaran melalui nomor: 082197064679 (Najwa Dhiya Ulhaq) dengan format Nama Ketua Tim_Asal Universitas_Jumlah Anggota
                        </li>
                        <li>
                            Bergabung ke grup WhatsApp setelah melakukan konfirmasi
                        </li>
                        <li>
                            Mengunggah KTM untuk mahasiswa S-1
                        </li>
                        <li>
                            Mengunggah file hasil karya sebagai bentuk pengumpulan hasil karya.
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
                                            : BNI
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">
                                            No. Rekening
                                        </td>
                                        <td>
                                            : 0568609437
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">
                                            Atas Nama
                                        </td>
                                        <td>
                                            :  Nur Fitria Khanani
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
                                Contoh : Muhammad Nasrullah # SMA 1 Lambung Mangkurat # CCM # Gelombang 2 # 20 Juli 2025 10.00 # 1. Najwa Dhiya Ulhaq 2. Siti Rahmah 3. Alya Afifah # Rp170.000
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
                                Contoh : muhammad Nasrullah # SMA 1 Lambung Mangkurat # Kuis # Gelombang 2 # 20 Juli 2025 10.00  # Siti Rahmah #Rp95.000
                            </p>
                            <h5 className="font-semibold mt-4">Kolektif</h5>
                            <p>
                                Nama Penyetor # Nama Sekolah # Kuis # Gelombang # Tanggal dan Waktu Pengiriman # Jumlah Delegasi # Nama Lengkap Peserta # Nominal Pengiriman
                            </p>
                            <p className="mt-3">
                                Contoh : Najwa Dhiya Ulhaq # SMA 1 Lambung Mangkurat # Kuis # Gelombang 1 # 10  Juli 2025 10.00 # 5 orang # 1. Fadiyah Septi  2.  Siti Rahmah 3. Alya Afifah 4. Muhammad Nasrullah 5. Nurin Nadhiroh # Rp425.000
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
                                Peserta Menunggu WhatsApp dari Panitia maksimal 2 x 24 jam sejak mengisi formulir pendaftaran
                            </li>
                            <li>
                                Setelah mendapat WhatsApp berupa kartu peserta, maka peserta secara resmi terdaftar sebagai peserta lomba Gebyar Matematika 2025.
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