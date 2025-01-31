import Image from "next/image";
import appleblack from "../../../public/appleblack.svg"
import microsoftimg from "../../../public/microsoftimg.svg"
import slackimg from "../../../public/slackimg.svg"
import googleimg from "../../../public/googleimg.svg"

const sponsors = [
  { name: "Apple", logo: "/appleblack.svg" },
  { name: "Microsoft", logo: "/microsoftimg.svg" },
  { name: "Slack", logo: "/slackimg.svg" },
  { name: "Google", logo: "/googleimg.svg" },
];

export default function SponsorLogos() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-40 mt-12 max-w-5xl">
      {sponsors.map((sponsor, index) => (
        <img key={index} src={sponsor.logo} alt={sponsor.name} className="h-24" />
        // <Image key={index} src={sponsor.logo} alt={sponsor.name} className="h-10" />
      ))}
    </div>
  );
}

