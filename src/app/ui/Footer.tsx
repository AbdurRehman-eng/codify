import Image from "next/legacy/image";

function Footer() {
  return (
    <footer className="w-full h-[63px] flex items-center justify-between px-[60]">
      {/* Left Content */}
      <div className="text-lightGray font-sourceCodePro text-[11px] font-medium">
        © 2025. All rights reserved.
      </div>

      {/* Right Content: Social Media Links */}
      <div className="flex items-center space-x-6">
        <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/images/footer/Component1.svg"
            alt="Discord Icon"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/images/footer/Component2.svg"
            alt="Instagram Icon"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/images/footer/Component3.svg"
            alt="Facebook Icon"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </a>
        <a href="https://www.skype.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/images/footer/Component4.svg"
            alt="Skype Icon"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
