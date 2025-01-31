import Navbar from '../app/component/Molecule/Navbar';
import Hero from '../app/component/Organism/Hero';
import Work from "../app/component/Organism/work";
import Extension from './component/Organism/Extension';
import Plan from './component/Organism/Plans';
import PricingSection from './component/Organism/Pricingsection';
import Taskey from './component/Organism/Taskey';
import Data from './component/Organism/Data';
import Apps from './component/Organism/Apps';
import Testimonials from './component/Organism/Testimonials';
import Contact from './component/Organism/Contact';
import FooterLinks from './component/Molecule/Footlink';
import Footer from './component/Organism/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Work/>
      <Extension/>
      <PricingSection/>
      <Taskey/>
      <Data/>
      <Apps/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}