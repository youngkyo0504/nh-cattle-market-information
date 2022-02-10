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
      className="bg-transparent   absolute top-0 left-0 right-0 w-full z-30  lg:py-6 py-2 px-8  mx-auto sm:max-w-xl md:max-w-full lg:max-w-9xl "
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <div className="order-1 md:order-1">
          <a
            className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
            href="/"
          >
            <img className="h-12" src={Logo} alt="" />
          </a>
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
            <ul className="md:flex items-center justify-between text-xl text-gray-nav pt-4 md:pt-0">
              {links.map((link) => (
                <li>
                  <a
                    className="inline-block no-underline hover:text-black   transition-all ease-in hover:font-bold hover:decoration-2 py-2 px-4"
                    href={link.src}
                  >
                    {link.name}
                  </a>
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
