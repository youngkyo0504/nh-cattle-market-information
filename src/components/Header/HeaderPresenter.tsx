import { Link, NavLink } from "react-router-dom";
import { ILink } from "../../@types/index";

interface HeaderProps {
  links: ILink[];
}

const Header = ({ links }: HeaderProps) => {
  return (
     <nav id="header" className="-white sticky top-0 w-full z-30  py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
            <div className="order-1 md:order-1">
                <a  className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="/">
                    <svg className="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                    </svg>
                    우시장 정보 센터
                </a>
            </div>
            <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-2" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                      {links.map((link)=>(
                          <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href={link.src}>{link.name}</a></li>
                      ))}
                    </ul>
                </nav>
            </div>

            

        </div>
    </nav>
  );
};

export default Header;
