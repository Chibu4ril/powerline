import Image from "next/image";
import Hero from "./hero";
import { Discover } from "./discover";
import { Testimonial } from "./testimonial";
import { Footer } from "./footer";

export default function Home() {
  return (
    <main className="bg-[#f2f3f5]">
    <div className="navbar bg-base-100 xl:px-52">
      
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>About</a></li>
        <li><a>Services
        </a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <div>
    <a className="hover:bg-transparent border-0 bg-transparent  cursor-pointer"><div className="flex items-center"><img src="/next.jpg" alt="" width={110} /> <h4 className="xl:text-2xl hidden md:flex">Power Line Limited </h4></div></a>
  </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl">
    <li><a>About</a></li>
        <li><a>Services
        </a></li>
        <li><a>Contact</a></li>
    </ul>
  </div>
  
</div>
<Hero></Hero>
<Discover></Discover>
<Testimonial></Testimonial>
<Footer></Footer>
</main>

  );
}
