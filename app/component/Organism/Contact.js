
import Button from "../Atom/Button";

export default function Contact() {
  return (
    <section className="bg-blue-950 text-white py-16 text-center">
      <h2 className="text-5xl font-bold">Try Whitepace Today</h2>
      <h2 className="text-5xl font-bold mt-4">Today</h2>

      <p className="mt-5 text-lg">Get started for free.</p>
      <p className="mt-1 text-lg">Add your whole team as your needs grow.</p>

      <div className="mt-6">
        
        <Button>
          Try Tasky free
        </Button>
      </div>
      <p className="mt-4 text-lg">On a big team? Contact sales</p>
      <div className="flex justify-center space-x-6 mt-8">
        <img src="/apple.svg" alt="Apple" className="h-8" />
        <img src="/windowsicon.svg" alt="Windows" className="h-8" />
        <img src="/androidicon.svg" alt="Android" className="h-8" />
      </div>
    </section>
  );
}


