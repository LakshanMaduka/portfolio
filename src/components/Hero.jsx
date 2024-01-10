import myPhoto from "../assets/my2.png";
import { TypeAnimation } from "react-type-animation";
import "aos/dist/aos.css";
const Hero = () => {
  const social_media_link = [
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/lakshan-maduka",
    },
    {
      logo: "logo-github",
      link: "https://github.com/LakshanMaduka",
    },
    {
      logo: "logo-instagram",
      link: "https://instagram.com/_lakshan_maduka_?igshid=NGVhN2U2NjQ0Yg==",
    },
    {
      logo: "logo-facebook",
      link: "https://www.facebook.com/profile.php?id=100007620136955&mibextid=ZbWKwL",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-2 md:flex-row flex-col items-center"
    >
      <div
        className="flex-1 flex items-center justify-center "
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <img src={myPhoto} className="md:w-11/12 h-full object-cover" />
      </div>
      <div
        className="flex-1 md:text-left text-center "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
          <span className="md:text-6xl text-5xl text-bggold">
            Hello ! <br />
          </span>
          My Name is <span className="text-bggold">Lakshan Maduka</span>
        </h1>

        <TypeAnimation
          className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Mobile App Developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Web Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />

        <typeWriter />
       <a href="#contact"> <button className="btn-primary mt-5">Contact Me</button></a>
        <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 ">
          {social_media_link.map((media, i) => (
            <div
              key={i}
              className="text-gray-600 hover:text-white cursor-pointer "
            >
              <a href={media.link}>
                <ion-icon name={media.logo}></ion-icon>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
