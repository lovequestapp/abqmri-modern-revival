import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
