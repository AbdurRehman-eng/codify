import PaymentSection from "@/app/ui/PaymentSection";
import HeroSection from "@/app/ui/HeroSection";
import CardSection from "@/app/ui/CardSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <CardSection />
      <PaymentSection />
    </div>
  );
}
