import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Illustration from "@/components/Illustration1";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/Sponsors";
import Tutorial from "@/components/Tutorial";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gebyar Matematika 2023</title>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Faq />
      <Tutorial />
      <Sponsors />
      <Contact />
      <Footer />
    </>
  )
}