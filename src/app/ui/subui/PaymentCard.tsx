import Button from "@/app/ui/subui/Button";
import Lines from "./lines";
import Image from "next/legacy/image";
import CheckboxPaymentCard from "./checkboxPaymentCard";

function PaymentCard({text, subText, src}: {text: string, subText: string, src: string}) {
    return ( 
        <div className=" p-[29px] relative h-[357px] space-y-[10px] w-[244px] bg-primary flex border-[0.5px] border-stroke border-opacity-50 items-center justify-center flex-col rounded-[20px]">
            <div className="flex flex-col items-start justify-center space-y-[10px]">
                <div className="font-semibold text-[24px] font-sora text-paymentcardtext">{text}</div>
                <div className="font-sora text-[9px] text-center text-[#67666C]">{subText}</div>
                <Image
                    src={`${src}`}
                    alt="price"
                    width={36}
                    height={44}
                />
                <Button children={"Get Started"} top="0px" left="0px" pos=" w-[188px] h-[30px]"/>
            </div>
            <Lines />
            <CheckboxPaymentCard text="Entry to weekly challenges"/>
            <Lines />
            <CheckboxPaymentCard text="Appear in Global LeaderBoards"/>
            <Lines />
            <CheckboxPaymentCard text="Buy Exciting items in shop"/>
        </div>
    );
}

export default PaymentCard;