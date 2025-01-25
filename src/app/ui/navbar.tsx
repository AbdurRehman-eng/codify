import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-primary h-[11.25vh] fixed top-0 left-0 shadow-lg border-2 border-border z-20 w-full">
            <div className="max-w-7xl mx-auto px-[3vw] py-[0.75vh] flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <p className="text-logo text-[6vh] font-tourney">C</p>
                    <p className="text-white text-[4.8vh] font-sortsMillGoudy">Codify</p>
                </div>
                <div className="flex space-x-[3vw]">
                    <Link href="#" className="text-[2.1vh] text-lightGray hover:text-white font-sourceCodePro font-extrabold">Explore</Link>
                    <Link href="#" className="text-[2.1vh] text-lightGray hover:text-white font-sourceCodePro font-extrabold">Pricing</Link>
                    <Link href="#" className="text-[2.1vh] text-lightGray hover:text-white font-sourceCodePro font-extrabold">Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
