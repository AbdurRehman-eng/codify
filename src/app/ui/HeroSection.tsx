import Image from "next/image";
import Button from "@/app/ui/subui/Button"

function HeroSection() {
    return ( 
        <div className="h-screen w-full relative border-2 border-border">
            {/* Background Images */}
            <Image
                src="/assets/images/hero/gradient.png"
                alt="Gradient Background"
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0 opacity-30"
            />
            <Image
                src="/assets/images/hero/background.png"
                alt="Background Image"
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0 opacity-20"
            />
            <Image
                src="/assets/images/hero/stars.svg"
                alt="Stars Background"
                fill
                style={{ objectFit: "cover" }}
                className="absolute inset-0 opacity-100 "
            />
            <Image
                src="/assets/images/hero/image.png"
                alt="Hero Image"
                width={169}
                height={95}
                className="absolute top-[388px] left-[848px] opacity-100 "
            />

            {/* Text Content */}
            <div className="absolute z-1 text-white w-[600px] h-auto text-center leading-normal top-[105px] left-[303px] font-sora text-[38px] font-[800] no-underline">
                Code with your Best, Compete, and Win with <span className="text-purple-600">Codify</span>
            </div>
            <Image
                src="/assets/images/hero/curve.png"
                alt="Curve Decoration"
                width={150}
                height={7}
                className="absolute top-[220px] left-[660px] z-1"
            />
            <div className="absolute z-1 text-lightGray w-[587px] h-auto text-center top-[240px] left-[310px] font-sora text-[14px] font-light ">
                Unleash your coding skills, conquer exciting challenges, and rise to the top of the leaderboard in thrilling competitions!
            </div>
            

            <Button children={"Get Started"} top="310px" left="520px" pos="absolute"/>

            <div className="absolute z-1 text-lightGray w-[433px] h-auto text-center top-[415px] left-[390px] font-sourceCodePro text-[11px] font-normal ">
               HELPING STUDENTS TO BECOME COMPETENT IN CODING RELATED ACTIVITIES
            </div>

            <p className="z-1 text-white absolute left-[330px] top-[470px] w-[555px] h-[120px] text-center text-[32px]  font-sourceCodePro drop-shadow-2xl divide-red-600">
              Master the Challange, Dominate Coding with <br/>Codify
            </p>
        </div>
    );
}

export default HeroSection;
