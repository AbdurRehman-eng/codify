import PaymentSection from "@/app/ui/PaymentSection";
import HeroSection from "@/app/ui/HeroSection";
import CardSection from "@/app/ui/CardSection";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="h-1 w-full bg-white"></div>
      <CardSection />
      <div className="h-1 w-full bg-white"></div>
      <PaymentSection />
      <div className="h-1 w-full bg-white"></div>
    </div>
  );
}
