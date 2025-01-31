
import Avatar from "../Atom/Avatar";


export default function Testimonialcard({ testimonial, name, role, avatar, isHighlighted }) {
  return (
    <div
      className={` p-6 rounded-lg shadow-lg ${
        isHighlighted ? "bg-blue-500 text-white" : "bg-white"
      }`}
    >
      {/* <QuoteIcon /> */}
      <p className="mt-4">{testimonial}</p>
      <hr className="my-4 border-gray-300" />
      <div className="flex items-center gap-3">
        <Avatar src={avatar} alt={name} />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}


