import PaymentCard from "@/app/ui/subui/PaymentCard";
import Button from "./subui/Button";
import Image from "next/image";

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
            <div className="grid grid-cols-5 justify-center">
                <div className="flex items-center h-[374px]">
                    <Image 
                        src={"/assets/images/pricing/startCurve.svg"}
                        alt="start curve"
                        height={176}
                        width={175}
                        className="w-full"
                    />
                </div>
                <div className="h-[374px]  flex items-end">
                    <PaymentCard src="/assets/images/pricing/Price.svg" text="Basic" subText="Entry to weekly tournaments and access to many other features" style="text-paymentcardtext" height={36} width={44} items={["Paid Entry to Weekly Challenges","Appear in Global LeaderBoards","Buy Exciting items in shop"]}/>
                </div>
                <div className="flex items-start py-[75px] h-[374px]">
                    <Image 
                        src={"/assets/images/pricing/centerCurve.svg"}
                        alt="center curve"
                        height={146.64}
                        width={252.84}
                        className="w-full"
                    />
                </div>
                <div className="h-[374px] flex items-start">
                    <PaymentCard src="/assets/images/pricing/Price1.svg" text="Premium" subText="Entry to weekly tournaments and access to many other features + exciting gifts" style="text-paymentcardtext2" height={38} width={108} items={["Free Entry to Weekly Challenges","Appear in Global LeaderBoards","Buy Exciting items in shop and get Exciting Daily Rewards"]}/>
                </div>
                <div className="flex items-center py-[75px] h-[374px]">
                    <Image 
                        src={"/assets/images/pricing/endCurve.svg"}
                        alt="end curve"
                        height={176}
                        width={175}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default PaymentSection;