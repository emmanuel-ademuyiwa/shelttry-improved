import React from "react";
import Testimonial from "./Testimonial";
import SectionHeader from "../SectionHeader/SectionHeader";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <SectionHeader
        title="clients testimonials"
        desc="See our best offers"
        className="white"
      />
      <Testimonial />
    </div>
  );
};

export default Testimonials;
