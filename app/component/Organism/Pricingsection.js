// components/organisms/PricingSection.js
import React from "react";
import PricingCard from "../Molecule/Pricingcard";
import Title from "../Atom/Title";
import Image from "next/image";
import scp from "../../../public/scp.jpg"
import Button from "../Atom/Button";
import laptop4 from '../../../public/laptop4.png'

const pricingData = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and widgets",
      "Connect Google Calendar",
      "Add reminders & notifications",
    ],
  },
  {
    title: "Personal",
    price: "$12.99",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and widgets",
      "Connect Google Calendar",
      "Add reminders & notifications",
    ],
    highlighted: true,
  },
  {
    title: "Organization",
    price: "$49.9",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and widgets",
      "Connect Google Calendar",
      "Add reminders & notifications",
    ],
  },
];

function PricingSection() {
  return (

      <main className="flex flex-col items-center justify-center px-6 py-12 bg-gray-10">
      
              <section className="flex flex-row items-center max-w-5xl w-full">
                      <div className="flex-1">
                        <Image src={laptop4} alt="Network" width={500} height={400} />
                      </div>
                      <div className="flex-1 text-left mt-6 ">
                        <h2 className="text-5xl font-bold ">
                          Work together
                        </h2>
                        <p className="mt-4 mb-8 text-lg">
                          Share your notes with colleagues and collaborate. Publish a note to the internet and share the URL with others.
                        </p>
                        <Button >
                             Try it Now →
                           </Button>
                      </div>
              </section>


              <section className="py-12  text-center mt-24">
                   <Title text="Choose Your Plan" />
                   <p className=" max-w-4xl mx-auto my-6 text-lg">
                        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
                   </p>
                   <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
                       {pricingData.map((plan, index) => (
                       <PricingCard key={index} {...plan} />
                        ))}
                   </div>
               </section>

      
          </main>

  
    
  );
}

export default PricingSection;
