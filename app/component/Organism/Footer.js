
import FooterLinks from "../Molecule/Footlink";
import Button from "../Atom/Button";
import Image from "next/image";
import facebook from "../../../public/facebook.svg";
import linkedin from "../../../public/linkedin.svg";
import twitter from "../../../public/twitter.svg";

const productLinks = ["Overview", "Pricing", "Customer stories"];
const resourcesLinks = ["Blog", "Guides & tutorials", "Help center"];
const companyLinks = ["About us", "Careers", "Media kit"];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 px-8">

      <div className="max-w-6xl mx-auto grid grid-cols-5 gap-8">
        {/* Left Side - Info */}
        <div>
          <h3 className="font-bold text-white">whitepace</h3>
          <p className="mt-2 text-sm">
            Whitepace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        {/* Middle - Links */}

        <FooterLinks title="Product" links={productLinks} />
        <FooterLinks title="Resources" links={resourcesLinks} />
        <FooterLinks title="Company" links={companyLinks} />

        {/* Right Side - CTA */}
        <div>
          <h4 className="font-semibold text-white">Try It Today</h4>
          <p className="mt-2 text-sm">Get started for free. Add your whole team as your needs grow.</p>
          <div className="mt-4">
            
            <Button>
              Try Tasky free
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}

      
      <div className="border-t border-gray-700 mt-8 pt-6 text-sm flex justify-between items-center ">
        <div className="flex space-x-4">
          <a href="#" className="">English</a>
          <a href="#" className="">Terms & Privacy</a>
          <a href="#" className="">Security</a>
          <a href="#" className="">Status</a>
        </div>
        <p className="">© 2025 Whitepace LLC .</p>
        <div className="flex space-x-1">
          {/* <a href="#"><Image src={facebook} alt="facebook" className="h-5"/></a>
          <a href="#"><Image src={twitter} alt="facebook" className="h-5" /></a>
          <a href="#"><Image src={linkedin} alt="facebook" className="h-5"/></a> */}
        </div>
      </div>
    </footer>
  );
}


