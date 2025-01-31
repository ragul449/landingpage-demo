
import Testimonialcard from "../Molecule/Testimonialcard";
import scp from "../../../public/scp.jpg"


const testimonials = [
  {
    testimonial:
      "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    avatar: "/avatar1.jpg",
    isHighlighted: false,
  },
  {
    testimonial:
      "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    avatar: "/avatar2.jpg",
    isHighlighted: true,
  },
  {
    testimonial:
      "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    avatar: "/avatar3.jpg",
    isHighlighted: true,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16  text-center my-24 max-w-5xl mx-auto">
      <h2 className="text-6xl font-bold">
        What Our Clients Says
      </h2>
      <div className=" mt-8 flex gap-6 justify-center">
        {testimonials.map((item, index) => (
          
          <Testimonialcard key={index} {...item} />
        ))}
      </div>
      <div className="mt-20 flex justify-center space-x-2">
        <span className="w-3 h-3 bg-blue-950 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>
    </section>
  );
}


