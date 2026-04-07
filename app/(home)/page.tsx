import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";

function page() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto mt-40">
        <WhyUs />
      </div>
    </div>
  );
}

export default page;
