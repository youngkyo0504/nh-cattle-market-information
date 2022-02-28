import { ReactComponent as Facebook } from "../../assets/footer-icon/facebook.svg";
import { ReactComponent as Antller } from "../../assets/footer-icon/antller.svg";
import { ReactComponent as Insta } from "../../assets/footer-icon/insta.svg";
import { ReactComponent as Mail } from "../../assets/footer-icon/mail.svg";
import { ReactComponent as KakaoTalk } from "../../assets/footer-icon/kakaotalk.svg";
import { useEffect } from "react";
const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-footer pt-3 pb-6 sm:pt-6 sm:pb-12">
      <div className=" text-gray-700 flex  w-full max-w-9xl flex-col place-content-between p-4 text-center sm:flex-row">
        <div className="mb-4 pt-2 text-xs text-footer-text sm:mb-0">
          Copyright © antller. All Rights Reserved.
        </div>
        <div className="flex justify-center">
          <a href="">
            <Facebook className="mr-1 h-6 fill-footer-icon   transition-all ease-in  hover:fill-footer-icon-darker" />
          </a>
          <a href="">
            <Antller className="mr-1 h-6 fill-footer-icon  transition-all ease-in  hover:fill-footer-icon-darker" />{" "}
          </a>
          <a href="">
            <Insta className="mr-1 h-6 fill-footer-icon transition-all ease-in hover:fill-footer-icon-darker" />{" "}
          </a>
          <a href="">
            <Mail className="mr-1 h-6 fill-footer-icon transition-all ease-in hover:fill-footer-icon-darker" />{" "}
          </a>
          <a href="">
            <KakaoTalk className="mr-1 h-6 fill-footer-icon transition-all ease-in hover:fill-footer-icon-darker" />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
