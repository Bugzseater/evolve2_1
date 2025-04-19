import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sponsers from "@/components/Sponsers";


export default function Home() {
  return (
    <div className=" w-full bg-gradient-to-b from-[#09122C] to-black">
      <Navbar/>
      <Hero/>
      <About/>
      <Sponsers/>
      <Contact/>
      <Footer/>
    </div>
  );
}
