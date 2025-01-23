import Link from "next/link";



const Navbar = () => {
    return (
      <div className="bg-primary h-[75px] fixed top-0 left-0 w-full shadow-lg border-2 border-border  z-10">
        <div className="max-w-7xl mx-auto px-10 py-2 flex justify-start items-center space-x-8  ">
        <p className="text-logo text-[40px] font-tourney  ">C</p>
        <p className="text-white text-[32px] font-sortsMillGoudy">Codify</p>
  
        <div className="px-[450] space-x-10">
          <Link href="#" className="text-[14px] text-lightGray hover:text-white font-sourceCodePro font-extrabold">Explore</Link>
          <Link href="#" className="text-[14px] text-lightGray hover:text-white font-sourceCodePro font-extrabold">Pricing</Link>
          <Link href="#" className="text-[14px] text-lightGray hover:text-white font-sourceCodePro font-extrabold">Profile</Link>
        </div>
         </div>
          </div>
    );
  }

export default Navbar;