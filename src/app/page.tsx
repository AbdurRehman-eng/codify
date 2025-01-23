import PaymentSection from "./ui/PaymentSection";
import HeroSection from "./ui/HeroSection";
import CardSection from "./ui/CardSection";


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
