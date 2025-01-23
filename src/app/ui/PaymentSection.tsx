import PaymentCard from "@/app/ui/subui/PaymentCard";
import Button from "./subui/Button";

function PaymentSection() {
    return ( 
        <div className="h-screen w-full bg-primary flex flex-col text-white">
            
            <div className="flex flex-col items-center text-center">
                <div className="w-full h-[15vh] flex items-center justify-center font-sourceCodePro text-[13px]">
                    <span className="flex items-center justify-center">{'{'}</span>Get Started with Codify<span className="flex items-center justify-center">{' }'}</span>
                </div>
                <div className="w-full h-[15vh] text-center flex items-center justify-center text-[48px] font-sora">
                    <p>Pay once, Enjoy for a month</p>
                </div>
            </div>
            <div className="flex-grow flex items-center justify-center">
                <PaymentCard src="/assets/images/pricing/Price.svg" text="Basic" subText="Entry to weekly tournaments and access to many other features."/>
            </div>
        </div>
    );
}

export default PaymentSection;