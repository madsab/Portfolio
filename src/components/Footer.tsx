import { on } from "events";
import FooterLink from "./atoms/FooterLink";
import Link from "./atoms/Link";
import { FooterLinks } from "./utils/FooterLinks";
import cn from "classnames";

const Footer = () => {
  const FooterLinksLeft = FooterLinks.slice(0, FooterLinks.length / 2);
  const FooterLinksRight = FooterLinks.slice(FooterLinks.length / 2);

  const privateEmail = "mads.barnes@hotmail.com";
  const onlineEmail = "mads.barnes@online.ntnu.no";

  return (
    <footer
      id="contact"
      className="w-full bg-[#131313] grid grid-cols-4 min-h-[325px] max-md:flex max-md:flex-col "
    >
      <div className="col-start-2 col-span-2 mx-3 my-11 max-md:px-5">
        <p className="text-3xl tracking-[1rem] mb-4">Connect</p>
        <div className="flex max-sm:flex-col">
          <div className="flex-1 space-y-4">
            {FooterLinksLeft.map((link, index) => (
              <FooterLink
                key={index}
                name={link.name}
                url={link.url}
                className=""
              />
            ))}
          </div>
          <div className="flex-1 space-y-4 max-sm:mt-4">
            {FooterLinksRight.map((link, index) => (
              <FooterLink
                key={index}
                name={link.name}
                url={link.url}
                className=""
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center space-y-5 max-md:px-10 mb-4">
        <div>
          <p className="font-bold">Private Email</p>
          <a
            href={cn("mailto:", privateEmail)}
            className="hover:underline opacity-50"
          >
            {privateEmail}
          </a>
        </div>
        <div>
          <p className="font-bold">Online Association Email</p>
          <a
            href={cn("mailto:", onlineEmail)}
            className="hover:underline opacity-50"
          >
            {onlineEmail}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
