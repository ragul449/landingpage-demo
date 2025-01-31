import Button from '../Atom/Button';

export default function Navbar() {
  return (
    <nav className="mx-auto flex justify-around  p-4 bg-blue-950 text-white ">
    
      <div className="text-lg font-bold ">whitepace</div>
      <div className="flex space-x-10">
        <a href="#" className="">Products</a>
        <a href="#" className="">Solutions</a>
        <a href="#" className="">Resources</a>
        <a href="#" className="">Pricing</a>
        <Button color='bg-yellow-400 text-blue-900'>Login</Button>
        <Button>Try Whitepace Free</Button>

      
      </div>
    </nav>
  );
}