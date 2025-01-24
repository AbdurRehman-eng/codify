import Button from "@/app/ui/subui/Button";
import Lines from "./lines";
import Image from "next/legacy/image";
import CheckboxPaymentCard from "./checkboxPaymentCard";

function PaymentCard({text, subText, src, items, width, height, style}: {text: string, subText: string, src: string, items: string[], width: number, height: number, style: string}) {
    const spaceY = '10';
    return ( 
        <div className={` p-[29px] relative h-[357px] space-y-[10px] w-[244px] bg-primary flex border-[0.5px] border-stroke border-opacity-50 items-center justify-center flex-col rounded-[20px]`}>
            <div className={`flex flex-col items-start justify-center space-y-[10px]`}>
                <div className={`font-semibold text-[24px] font-sora ${style}`}>{text}</div>
                <div className="font-sora text-[9px] text-center text-[#67666C]">{subText}</div>
                <Image
                    src={`${src}`}
                    alt="price"
                    width={width}
                    height={height}
                />
                <Button children={"Get Started"} top="0px" left="0px" pos=" w-[188px] h-[30px]"/>
            </div>
            {
                items.map((item, index) => (
                    <div key={index} className={`space-y-[10px]`}>
                        <Lines />
                        <CheckboxPaymentCard text={item}/>
                    </div>
                ))
            }
        </div>
    );
}

export default PaymentCard;