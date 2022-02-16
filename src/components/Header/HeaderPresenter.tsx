import { Link, NavLink } from "react-router-dom";
import { ILink } from "../../@types/index";
import Logo from "../../assets/woo-logo.png";

interface HeaderProps {
  links: ILink[];
}

const Header = ({ links }: HeaderProps) => {
  return (
    <nav
      id="header"
      className="bg-transparent font-spoqa  absolute top-0 left-0 right-0 w-full z-30    px-5  mx-auto sm:max-w-xl md:max-w-full lg:max-w-9xl "
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0  pt-12">
        <div className="order-1 md:order-1">
          <Link
            className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 "
            to="/"
          >
            <img className="h-8" src={Logo} alt="" />
          </Link>
        </div>
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
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
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-2"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-nav pt-4 md:pt-0">
              {links.map((link) => (
                <li>
                  <Link
                    className="inline-block no-underline hover:text-black   transition-all ease-in hover:font-bold  hover:decoration-2 py-2 px-4"
                    to={link.src}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
