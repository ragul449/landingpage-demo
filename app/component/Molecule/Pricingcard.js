import FeatureList from "../Molecule/Featurelist";
import Button from "../Atom/Button";

export default function PricingCard({ title, price, features, highlighted = false }) {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg  ${
        highlighted ? "bg-blue-950 text-yellow-200  " : "bg-white"
      }`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-3xl font-bold my-4">{price}</p>
      <FeatureList features={features} highlight={highlighted}/>
      <div className="my-8">
        {/* <Button text="Get Started" variant={highlighted ? "primary" : "secondary"} /> */}
        <Button highlight={highlighted}>Get started</Button>
      </div>
    </div>
  );
}


