import React from "react";
import Title from "@/components/Title/Title";

const Hero = () => {
  return (
    <section>
      <p>Font-End Developer</p>
      <Title>Aktar Ahmed</Title>
      <p>
        Front-End Developer specializing in modern, responsive, and
        performance-focused web interfaces.
      </p>
      <div className="space-x-5">
        <button className="btn-primary">View Works</button>
        <button className="btn-secondary">Download CV</button>
      </div>
    </section>
  );
};

export default Hero;
