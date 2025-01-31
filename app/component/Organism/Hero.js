import Button from '../Atom/Button';
import Image from 'next/image';
import scp from '../../../public/scp.jpg'
import laptop from '../../../public/laptop.png'

export default function Hero() {
  return (
   
    <section className="bg-blue-950 ">
      <div className="container mx-auto px-4 pt-32 pb-16 flex  justify-around max-w-5xl">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-4">Get More Done with whitepace</h1>
            <p className="text-lg text-white mb-8">
               Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
            </p>
            <Button>Try Whitepace free →</Button>
          </div>


        <div className="">
          <Image
            src={laptop}
            alt="Person typing on laptop"
            width={820}
            height={540}
            className=""
          />
        </div>
      </div>
    </section>


    
  );
}





