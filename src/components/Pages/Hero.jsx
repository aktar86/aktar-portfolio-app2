import React from "react";
import Title from "@/components/Title/Title";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center py-10 border px-5 mt-10 bg-amber-950 ">
      <div className="space-y-3">
        <p>Font-End Developer</p>
        <Title>Aktar Ahmed</Title>
        <p className="max-w-2/3">
          Front-End Developer specializing in modern, responsive, and
          performance-focused web interfaces.
        </p>
        <div className="space-x-5">
          <button className="btn-primary">View Works</button>
          <button className="btn-secondary">Download CV</button>
        </div>
      </div>
      {/* img */}
      <div className="border ">
        <div className="max-w-150">
          <img src={"/p-aktar.png"} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
