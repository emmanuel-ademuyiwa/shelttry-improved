import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Workflow from "./Workflow";

const Operations = () => {
  return (
    <section>
      <div className="container">
        <SectionHeader title="See how we operate" desc="What you need to do" />
        <div className="operations">
          <Workflow />
        </div>
      </div>
    </section>
  );
};

export default Operations;
