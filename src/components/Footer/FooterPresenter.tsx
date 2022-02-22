import { ReactComponent as Facebook } from "../../assets/footer-icon/facebook.svg";
import { ReactComponent as Antller } from "../../assets/footer-icon/antller.svg";
import { ReactComponent as Insta } from "../../assets/footer-icon/insta.svg";
import { ReactComponent as Mail } from "../../assets/footer-icon/mail.svg";
import { ReactComponent as KakaoTalk } from "../../assets/footer-icon/kakaotalk.svg";
const Footer = () => {
  return (
    <footer className="bg-footer flex items-center justify-center sm:pt-6 sm:pb-12 pt-3 pb-6">
      <div className=" max-w-9xl w-full  flex flex-col sm:flex-row place-content-between text-center text-gray-700 p-4">
        <div className="text-footer-text text-xs pt-2 mb-4 sm:mb-0">
          Copyright © antller. All Rights Reserved.
        </div>
        <div className="flex justify-center">
          <a href="">
            <Facebook className="h-6 mr-1 hover:fill-footer-icon-darker   transition-all ease-in  fill-footer-icon" />
          </a>
          <a href="">
            <Antller className="h-6 mr-1 hover:fill-footer-icon-darker  transition-all ease-in  fill-footer-icon" />{" "}
          </a>
          <a href="">
            <Insta className="h-6 mr-1 hover:fill-footer-icon-darker transition-all ease-in fill-footer-icon" />{" "}
          </a>
          <a href="">
            <Mail className="h-6 mr-1 hover:fill-footer-icon-darker transition-all ease-in fill-footer-icon" />{" "}
          </a>
          <a href="">
            <KakaoTalk className="h-6 mr-1 hover:fill-footer-icon-darker transition-all ease-in fill-footer-icon" />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
