import React from "react";
import Title from "../Title/Title";
import { CodeXml, Rocket, User } from "lucide-react";

const About = () => {
  const aboutStats = [
    {
      id: 1,
      icon: <CodeXml />,
      count: 10,
      title: "Projects Completed",
    },
    {
      id: 2,
      icon: <User />,
      count: 7,
      title: "Happy Clients",
    },
    {
      id: 3,
      icon: <Rocket />,
      count: 1,
      title: "Years of Experience",
    },
  ];

  return (
    <section id="about" className="text-center bg-slate-900 py-10">
      <Title>About Me</Title>
      <div className="h-2 w-30 bg-white mx-auto my-5"></div>
      <div className="border lg:flex items-center  gap-8">
        <div className="flex-1 text-left  p-5">
          <p className="text-2xl font-semibold mb-2">
            Passionate MERN Stack Developer
          </p>
          <p>
            I’m a passionate Full-Stack Developer (MERN) who has recently
            completed my learning journey and is now focused on building
            real-world, scalable web applications. I enjoy turning ideas into
            clean, functional, and user-friendly digital experiences. <br />
            <br />I work with React, JavaScript, Tailwind CSS, Node.js, and
            MongoDB, and I’m currently exploring Next.js to build faster and
            more modern applications. My background in graphic design helps me
            create interfaces that are not only functional but also visually
            appealing. <br /> <br /> My goal is to grow into a senior web
            developer, work internationally, and contribute to impactful
            products. I’m open to jobs, internships, freelance, and remote
            opportunities where I can learn, grow, and add value.
          </p>
        </div>
        <div className="flex-1 p-2 flex flex-col  lg:flex-row gap-4 justify-center items-center">
          {aboutStats.map((a) => (
            <div
              key={a.id}
              className="border border-gray-600 hover:border-gray-300 bg-gray-800 rounded-xl lg:flex-1 w-full lg:w-0 flex flex-col  justify-center items-center p-5 duration-500 transform transition ease-in-out  "
            >
              {/* <p width={100}>{a.icon}</p> */}
              <h3 className="font-bold text-5xl">{a.count}+</h3>
              <p>
                <small>{a.title}</small>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
