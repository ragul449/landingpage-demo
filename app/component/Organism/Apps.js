
import Button from "../Atom/Button";
import Image from "next/image";
import scp from "../../../public/scp.jpg"


export default function Apps() {
  return (
    <section className="py-32 px-20 bg-blue-950 flex items-center ">
      {/* left */}
      <div className="w-[40%] flex justify-center mx-auto">
         <Image src={scp} alt="Laptop" width={400} height={250} className="" />
      </div>

      {/* Right  */}
      <div className="w-[50%] mx-auto">
      <h2 className="text-5xl font-bold text-white mt-4">
        Work with Your Favorite Apps Using <span className="font-bold">whitepace</span>
      </h2>
      <p className="text-white mt-8 text-lg">
        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
      </p>
      <div className="mt-8">
        
        <Button >
          Read More →
        </Button>
      </div>
    </div>

    </section>
  );
}


