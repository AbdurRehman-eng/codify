import Button from "@/app/ui/subui/Button";
import Lines from "./lines";
import Image from "next/image";

function PaymentCard({text, subText}: {text: string, subText: string}) {
    return ( 
        <div className=" p-[36px] relative h-[357px] space-y-2 w-[244px] bg-primary flex border-[0.5px] border-stroke border-opacity-50 items-center justify-center flex-col rounded-[20px]">
            <div className="">
                <div className="font-semibold text-[24px] font-sora text-paymentcardtext">{text}</div>
                <div className="font-sora text-[8px] text-center text-[#67666C]">{subText}</div>
                <Image
                    src="/assets/images/pricing/Price.svg"
                    alt="0 dollars"
                    width={36}
                    height={44}
                />
                <Button children={"Get Started"} top="0px" left="0px" pos=""/>
            </div>
            <Lines />
        </div>
    );
}

export default PaymentCard;