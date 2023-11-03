// import html from "../assets/skills/html.png";
// import css from "../assets/skills/css.png";
// import express from "../assets/skills/express.png";
// import firebase from "../assets/skills/firebase.png";
// import flutter from "../assets/skills/flutter.png";
// import java from "../assets/skills/java.png";
// import mongodb from "../assets/skills/mongodb.png";
// import nodejs from "../assets/skills/nodejs.png";
// import tailwindcss from "../assets/skills/tailwindcss.png";
import html from "../assets/skills/svg/html.svg";
import css from "../assets/skills/svg/css.svg";
import flutter from "../assets/skills/svg/flutter.svg";
import mongodb from "../assets/skills/svg/mongodb.svg";
import nodejs from "../assets/skills/svg/nodejs.svg";
import tailwindcss from "../assets/skills/svg/tailwindcss.svg";
import react from "../assets/skills/svg/react.svg";
import git from "../assets/skills/svg/git.svg";

const Skills = () => {
  const skills = [
    { img: flutter, skill: "intermediate" },
    { img: react, skill: "intermediate" },
    { img: html, skill: "intermediate" },
    { img: css, skill: "intermediate" },
    { img: mongodb, skill: "intermediate" },
    { img: nodejs, skill: "intermediate" },
    { img: tailwindcss, skill: "beginner" },
    { img: git, skill: "intermediate" },
  ];

  return (
    <section id="skills" className="bg-bgblack py-10 relative">
      <div className="mt-8 text-bgwhite text-center">
        <h3 className="text-4xl font-semibold">
          My
          <span className="text-bggold">Skills</span>
        </h3>
        <p className="text-gray-400 my-5 text-xl ">My Knoledge</p>
        <div
          className="flex items-center justify-center mt-12 gap-10 flex-wrap "
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="">
            <div className="grid md:grid-cols-4 md:gap-20 grid-cols-2 gap-3">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="object-cover  border-2 border-bggold relative min-w-[10rem] max-w-[16rem]  p-10 rounded-xl items-center"
                >
                  <img
                    src={skill.img}
                    className="h-32 hover:scale-125 duration-300"
                  />
                  <div className="text-bgash text-lg mt-5 hover:relative hidden">
                    {skill.skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
