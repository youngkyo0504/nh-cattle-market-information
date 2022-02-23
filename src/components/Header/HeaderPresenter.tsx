import { Link } from "react-router-dom";
import { ILink } from "../../@types/index";
import Logo from "../../assets/woo-logo.png";

interface HeaderProps {
  links: ILink[];
}

const Header = ({ links }: HeaderProps) => {
  return (
    <nav
      id="header"
      className="bg-transparent font-spoqa  absolute top-0 left-0 right-0 w-full z-30 mx-auto  lg:max-w-9xl "
    >
      <div className="w-full  mx-auto flex flex-wrap items-center justify-between mt-0  pt-11">
        <div className=" ">
          <Link
            className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 "
            to="/"
          >
            <img className="md:h-[42px] h-8" src={Logo} alt="" />
          </Link>
        </div>
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer md:hidden block mr-4"
        >
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 "
          id="menu"
        >
          <nav>
            <ul className="md:flex  justify-between text-base text-gray-nav pt-4 md:pt-0 h-8">
              {links.map((link) => (
                <li>
                  <Link
                    className="text-[0.95rem] inline-block no-underline hover:text-black   transition-all ease-in hover:font-bold  hover:decoration-2  last:px-content px-4"
                    to={link.src ? link.src : ""}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <div className="relative group">
                <button className="flex flex-row items-center text-[0.95rem] no-underline group-hover:text-black   transition-all ease-in group-hover:font-bold last:px-content px-4">
                  <span>KPN 분석</span>
                  <span className="pl-1 text-blue text-[0.2rem]">▼</span>
                </button>
                <div className="  bg-white top-full right-content  w-48 min-w-full  absolute  z-10 translate-y-2  rounded-lg shadow-md  group-hover:translate-y-0 transition-all opacity-0 ease-in-out  group-hover:opacity-100  duration-500">
                  <div className=" rounded-md px-2 pt-2 pb-2   bg-white text-md ">
                    <ul className="text-sm">
                      <li className="rounded-md px-4 py-2 hover:bg-[#F1F2F4]">
                        KPN 분석
                      </li>
                      <li className="rounded-md px-4 py-2 hover:bg-[#F1F2F4]">
                        KPN 족보
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
