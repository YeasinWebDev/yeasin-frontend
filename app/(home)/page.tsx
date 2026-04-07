import Blueprint from "@/components/home/Blueprint";
import Curriculum from "@/components/home/Curriculum";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";

function page() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto mt-40">
        <WhyUs />
        <Blueprint/>
        <Curriculum/>
        <Testimonials/>
      </div>
    </div>
  );
}

export default page;
