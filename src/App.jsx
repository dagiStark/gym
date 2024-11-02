import {
  Hero,
  About,
  BMI,
  Services,
  Banner,
  Trainers,
  Popular,
  PricingPlan,
  Contact,
  Footer,
  Navbar,
} from "./pages";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="bg-black/80">
        <Navbar />
        <Hero />
        <About />
        <BMI />
        <Services />
        <Banner />
        <Trainers />
        <Popular />
        <PricingPlan />
        <Contact />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
