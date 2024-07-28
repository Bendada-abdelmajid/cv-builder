import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Guides from "@/components/home/Guides";
import Faq from "@/components/home/Faq";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";


export default function Home() {
  return (
    <>
    <Header/>
   
    <main className="">

    <Hero/>
    <Features/>
    <Guides/>
    <Faq/>
    </main>
    <Footer/>
    </>
  );
}
