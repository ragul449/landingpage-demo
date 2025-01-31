import Button from '../Atom/Button';
import Image from 'next/image';
import scp from '../../../public/scp.jpg'

export default function Plan() {
  return (

    <main className="flex flex-col items-center justify-center px-6 py-12 bg-gray-50">

        <section className="flex flex-row items-center max-w-5xl w-full">
                <div className="flex-1">
                  <Image src={scp} alt="Network" width={400} height={400} />
                </div>
                <div className="flex-1 text-left mt-6 ">
                  <h2 className="text-4xl font-bold text-gray-900">
                    Work together
                  </h2>
                  <p className="text-gray-600 mt-4">
                    Share your notes with colleagues and collaborate. Publish a note to the internet and share the URL with others.
                  </p>
                  <Button >
                       Try it Now →
                     </Button>
                </div>
        </section>

    </main>


  )
};