
import Image from "next/image";

export default function Avatar({ src, alt }) {
  return <img src={src} alt={alt} className="w-12 h-12 rounded-full" />;
  // <Image src={src} alt={alt} className="w-12 h-12 rounded-full"/>
}


