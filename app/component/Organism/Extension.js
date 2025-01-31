import Button from '../Atom/Button';
import Image from 'next/image';
import scp from '../../../public/scp.jpg'
import laptop3 from '../../../public/laptop3.png'

export default function Extension() {
  return (

    <section className="flex flex-row items-center w-full bg-blue-950 text-white p-12 mt-16   ">
      
          <div className="flex-1 mx-32">
             <h2 className="text-5xl font-bold ">
               Use as Extension
             </h2>
             <p className="mt-4 text-lg">
               Use the web clipper extension  available on Chrome, and Firefox, to save web pages or take screenshoots as note.
             </p>
             <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center">
             Let's Go →
             </button>
          </div>
          <div className="flex-1 mt-6  ">
            <Image src={laptop3} alt="Extension" width={500} height={300} className="" />
          </div>
    </section>

  )
}

{/* <main className="flex flex-col items-center justify-center px-6 py-12 bg-gray-50">

<section className="flex flex-col md:flex-row items-center max-w-5xl w-full"> */}