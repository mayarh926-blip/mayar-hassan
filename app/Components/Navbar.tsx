

import Link from "next/link";

import { GiHydra } from "react-icons/gi";



 
  
  const Navbar = () => {
    return (
      <nav className="bg-transparent">
      <div className="max-w-6xl mx-auto px-7 lg:px-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/15 pb-6 pt-4">
          <div className="flex items-center space-x-2 text-2xl italic font-bold text-white">
            <span>HYDRA</span>
            <GiHydra color="fuchsia" size={30} />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-3 w-full md:w-auto">
            <div className="flex flex-wrap items-center gap-5 text-lg font-medium text-white md:justify-end">
              <Link className="hover:text-[#ff096c] transition-colors" href="/">
            Home
              </Link>
              <Link className="hover:text-[#ff096c] transition-colors" href="/about">
            About
              </Link>
              <Link className="hover:text-[#ff096c] transition-colors" href="/servers">
             Servies
              </Link>
              <Link className="hover:text-[#ff096c] transition-colors" href="/contact">
            contact
              </Link>
            </div>

          
          </div>
        </div>
      </div>
    </nav>
    )
  }
  
  export default Navbar




