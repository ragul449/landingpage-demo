
export default function FooterLinks({ title, links }) {
  return (
    <div>
      <h4 className="font-semibold">{title}</h4>
      <ul className="mt-2 space-y-1 text-gray-300">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}


