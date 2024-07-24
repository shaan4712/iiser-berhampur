import React from "react";
import FAQ from "../pages/FAQ";
import InstrumentsSection from "./InstrumentsSection";

function LandingPage() {
  return (
    <div className="container mt-5">
      <br></br>
      <br></br>
      <p>
        The Indian Institute of Science Education and Research Berhampur,
        established in 2016 by the Ministry of Education, Government of India is
        a Center of Excellence dedicated to teaching and research in basic
        sciences. As a unique initiative in science education in India, IISER
        Berhampur aims to be a University of the highest caliber devoted to both
        high quality teaching and state-of-the-art research in a totally
        integrated manner, thus nurturing both curiosity and creativity.
      </p>
      <p>
        IISER Berhampur offers 5 years BS-MS and PhD programmes in an
        intellectually vibrant atmosphere of research. Apart from classroom
        instruction, IISER builds student skills in areas such as scientific
        inquiry, problem solving, analytical and communication skills,
        computational sciences, electronics, instrumentation and workshop
        practices. IISER plans to develop advanced teaching and research
        laboratories where students will have the opportunity to perform
        experiments as well as pursue advanced research under the mentorship of
        world-class faculty. This would make education and career building in
        basic sciences more exciting and rewarding. <br />
        We dedicate ourselves to learn, teach and serve society through
        excellence in science education and research, in an ecosystem based on
        integrity, fairness, dignity and professionalism to provide equal
        opportunities for all.
      </p>
      <InstrumentsSection />
      <section id="faqSection">
        <FAQ />
      </section>
    </div>
  );
}

export default LandingPage;
