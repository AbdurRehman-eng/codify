import Image from "next/image";

function CheckboxPaymentCard({text}: {text: string}) {
    return ( 
        <div className="flex flex-row space-x-2 items-center w-full">
            <Image src={'assets/images/pricing/check.svg'} alt="checkbox" width={16} height={16} />
            <div className="font-sora text-[8px]">{text}</div>
        </div>
    );
}

export default CheckboxPaymentCard;