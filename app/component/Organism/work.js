import Image from "next/image"
import Button from "../Atom/Button"
import scp from "../../../public/scp.jpg"
import laptop2 from '../../../public/laptop2.png'
import circle from '../../../public/circle.png'

export default function Work() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12 bg-white">

      {/* Section 1 */}

      <section className="flex flex-row items-center max-w-5xl mb-16">
        <div className="flex-1 text-left">
          <h2 className="text-6xl font-bold ">
            Project Management
          </h2>
          <p className="text-lg mt-6 mb-12">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app.Take photos to a note.
          </p>
          <Button >
              Get Started →
          </Button>
        </div>
        <div className="flex-1 mt-6 ">
          <Image src={laptop2} alt="Laptop" width={500} height={300} className="" />
        </div>
      </section>

      {/* Section 2 */}

      <section className="flex flex-row items-center max-w-5xl w-full">
        <div className="flex-1">
          <Image src={circle} alt="circle" width={500} height={400} />
        </div>
        <div className="flex-1 mt-6 ml-8">
          <h2 className="text-6xl font-bold ">
            Work together
          </h2>
          <p className="mt-6 mb-8 text-lg">
            Share your notes with colleagues and collaborate. Publish a note to the internet and share the URL with others.
          </p>
          <Button >
               Try it Now →
             </Button>
        </div>
      </section>
    </main>
  );
}