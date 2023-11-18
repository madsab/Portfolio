import FooterLink from "./atoms/FooterLink";
import { FooterLinks } from "./utils/FooterLinks";

const Footer = () => {
  const FooterLinksLeft = FooterLinks.slice(0, FooterLinks.length / 2);
  const FooterLinksRight = FooterLinks.slice(FooterLinks.length / 2);

  return (
    <footer className="w-full bg-[#131313] grid grid-cols-4 min-h-[325px] max-sm:flex max-sm:flex-col ">
      <div className="col-start-2 col-span-2 mx-3 my-11">
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
      <div className="">Hei</div>
    </footer>
  );
};

export default Footer;
