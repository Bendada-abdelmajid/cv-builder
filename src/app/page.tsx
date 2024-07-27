import Hero from "@/components/Hero";
import Features from "@/components/home/Features";
import Guides from "@/components/Guides";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


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
