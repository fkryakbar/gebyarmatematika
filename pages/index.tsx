import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Illustration from "@/components/Illustration1";
import Info from "@/components/Info";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/Sponsors";
import Tutorial from "@/components/Tutorial";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/v1/collection/gm23/slug?limit=6`, {
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
export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Gebyar Matematika 2024</title>
        <meta name="description" content="Gebyar Matematika merupakan ajang kompetisi matematika yang diadakan oleh Himpunan Mahasiswa Pendidikan Matematika Fakultas Keguruan dan Ilmu Pendidikan Universitas Lambung Mangkurat." />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Faq />
      <Info data={props.data} />
      <Tutorial />
      <Sponsors />
      <Contact />
      <Footer />
    </>
  )
}