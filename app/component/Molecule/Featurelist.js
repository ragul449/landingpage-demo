
import CheckIcon from "../Atom/Cevicon";

export default function FeatureList({ features, highlight }) {
  return (
    <ul className={`space-y-4  ${highlight ? "text-white":"text-gray-700"}`}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <CheckIcon />
          {feature}
        </li>
      ))}
    </ul>
  );
}

