import React from "react";
import FAQ from "../pages/FAQ";
import InstrumentsSection from "./InstrumentsSection";
import LandingNavbar from "./LandingNavbar";
import ImageCarousel from "./ImageCarousel";
import '../css files/LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <LandingNavbar />
      <ImageCarousel />
    <div className="content-container mt-5">
      <p>
      The Central Analytical Instrumentation Facility (CAIF) at IISER Berhampur represents a significant advancement 
      in research infrastructure accessibility, serving as a vital hub for scientists, researchers, and academics who require 
      sophisticated analytical equipment but may not have the means to purchase or maintain such costly instruments independently. 
      By operating on a rental model, the facility democratizes access to cutting-edge research tools, allowing researchers from 
      various institutions and even industry partners to conduct their experiments using high-precision instruments under expert guidance. 
      This approach not only maximizes the utilization of expensive equipment but also creates a collaborative environment where researchers 
      can share knowledge and expertise while working with these advanced tools.
      </p>
      <p>
      The impact of CAIF extends far beyond mere equipment access, as it plays a crucial role in advancing scientific 
      research across multiple disciplines, from materials science and chemistry to biological sciences and environmental studies. 
      The facility's comprehensive range of analytical instruments, coupled with its professional support staff, enables researchers 
      to obtain precise, reliable data that meets international standards. This has led to enhanced research output quality, accelerated 
      project timelines, and increased opportunities for breakthrough discoveries. Furthermore, the facility's presence at IISER Berhampur 
      has strengthened the institution's position as a center of excellence in scientific research, attracting collaborations with other research 
      institutions and industry partners while providing valuable hands-on experience to students and early-career researchers who might otherwise 
      not have access to such sophisticated instrumentation.
      </p>
      <InstrumentsSection />
      <section id="faqSection">
        <FAQ />
      </section>
    </div>
    </div>
  );
}

export default LandingPage;
