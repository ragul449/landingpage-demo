
import Button from "../Atom/Button";
import Image from "next/image";
import scp from "../../../public/scp.jpg"
import SponsorLogos from "../Molecule/Sponsor";

export default function Data() {
  return (

    <main className="flex flex-col items-center justify-center px-6 py-12  ">
          
          <section className="flex flex-row items-center max-w-5xl w-full mb-16">
            <div className="flex-1 text-left">
              <h2 className="text-5xl font-bold ">
                100% Your Data
              </h2>
              <p className=" mt-4 text-lg mb-12">
              The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End  and ensure no-one but yourself can access them.
              </p>
              <Button >
                  Read More →
              </Button>
            </div>
            <div className="flex-1 mt-6 mb-24 ">
              <Image src={scp} alt="Laptop" width={500} height={300} className="rounded-lg" />
            </div>
 
          </section>

          <section>

          <div>
            <h1 className="text-5xl font-bold mt-30"> Our Sponsors</h1>
            <SponsorLogos/>
          </div>

          </section>
    </main>      
  );
}




