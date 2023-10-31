import myPhoto from "../assets/my2.png";
const Hero = () => {
  const social_media = [
    "logo-linkedin",
    "logo-github",
    "logo-instagram",
    "logo-facebook",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-2 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center">
        <img src={myPhoto} className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1 md:text-left text-center">
        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
          <span className="md:text-6xl text-5xl text-bggold">
            Hello ! <br />
          </span>
          My Name is <span className="text-bggold">Lakshan Maduka</span>
        </h1>
        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
          Web Developer/ Mobile Developer
        </h4>
        <button className="btn-primary mt-5">Contact Me</button>
        <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 ">
          {social_media.map((icon, i) => (
            <div
              key={i}
              className="text-gray-600 hover:text-white cursor-pointer "
            >
              <ion-icon name={icon}></ion-icon>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
