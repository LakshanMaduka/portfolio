import aboutImage from "../assets/my3.png";
const About = () => {
  const info = [
    { text: "Languages", count: 4 },

    { text: "Web Projects", count: 4 },
    { text: "Mobile Projects", count: 10 },
  ];
  return (
    <section id="about" className="py-10 text-bgwhite ">
      <div className="text-center mt-8">
        <h3 className="text-5xl font-semibold">
          {" "}
          About <span className="text-bggold">Me</span>
        </h3>
        <p className="text-gray-600 my-3 text-lg"> Description About Me</p>
        <div className="flex md:flex-row flex-col-reverse md:gap-6 gap-12 px-2 max-w-7xl mx-auto items-center">
          <div>
            <div>
              <p className="text-justify leading-7 md:text-lg  md:mx-0 text-sm mx-2">
                I am a fast learner who adapts quickly to change and eager to
                learn new methods and technologies, and work as an effective
                team member. Intend to work hard for the advancement of any
                project that I&apos;m working on.
              </p>

              <div>
                <div className="flex mt-10 items-center gap-9">
                  {info.map((info) => (
                    <div key={info.text} className="md:text-lg text-sm">
                      <h3 className="md:text-4xl text-2xl font font-semibold text-bgwhite ">
                        {info.count}
                        <span className="text-bggold ">+</span>
                      </h3>
                      <span>{info.text}</span>
                    </div>
                  ))}
                </div>
                <br />

                <br />
                <a href="./src/assets/cv/M.B.L.M.Senevirathne.pdf" download>
                  <button className="btn-primary"> Download CV</button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-enter">
            <div className=" lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
              <img src={aboutImage} className="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
