import Image from "next/image";
import apple from "../../../public/apple.svg"


const sponsors = [
  { name: "Apple", logo: "/apple.svg" },
  { name: "Microsoft", logo: "/microsoft.svg" },
  { name: "Slack", logo: "/slack.svg" },
  { name: "Google", logo: "/google.svg" },
];

export default function SponsorLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
      {sponsors.map((sponsor, index) => (
        // <img key={index} src={sponsor.logo} alt={sponsor.name} className="h-10" />
        <Image key={index} src={sponsor.logo} alt={sponsor.name} width={20} height={20} className="" />
      ))}
    </div>
  );
}

