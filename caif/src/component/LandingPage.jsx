import React from "react";
import FAQ from "../pages/FAQ";

function LandingPage() {
  return (
    <div className="container mt-5">
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
      <p>
        <strong>Vision</strong>
        <br />
        The vision of IISER Berhampur encompasses creation of research
        institute/centres of the highest caliber in which teaching and education
        in basic sciences will be totally integrated with state-of-the-art
        research. IISERs are devoted to under-graduate and post-graduate
        teaching in sciences in an intellectually vibrant atmosphere of research
        and make education and career in basic sciences more attractive by
        providing opportunities in integrative teaching and learning of
        sciences.
      </p>{" "}
      <p>
        <strong>Mission</strong>
        <br />
        To create quality education and research in basic sciences. To attract
        and nurture high-quality academic faculty. To create integrated Masters
        Programme in sciences, in order to provide entry into research at a
        younger age. In addition, the Institutes will have integrated programmes
        leading to Masters and Ph.Ds to those who hold a Bachelor’s degree in
        science. To make possible a flexible borderless curriculum in sciences.
        To actively forge strong relationship with existing universities and
        colleges and network with laboratories and institutions. To establish
        advanced Research Laboratories and Central facilities.
      </p>
      <section id="faqSection">
        <FAQ />
      </section>
    </div>
  );
}

export default LandingPage;
