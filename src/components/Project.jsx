import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.png";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Temperature Monitor App",
      github_link:
        "https://github.com/Chathurangi67herath/Mini-Project---Termomete.git",
    },
    {
      img: project2,
      name: "Smart Attendence App",
      github_link:
        "https://github.com/LakshanMaduka/mobile-attendence-admin-app.git",
    },
    {
      img: project3,
      name: "Point Of Sale App",
      github_link: "https://github.com/LakshanMaduka/ricemillershop_app.git",
    },
    {
      img: project4,
      name: "React Todo App",
      github_link: "https://github.com/LakshanMaduka/ToDo.git",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-bggold">Projects</span>
        </h3>
        <p className="text-gray-400 my-5 text-lg">My awesome works</p>
      </div>
      <br />
      <div
        className="flex max-w-6xl gap-7 px-5 mx-auto items-center relative"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <div className=" w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-[400] w-full p-4 bg-bgash rounded-xl ">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      className="text-bggold bg-bgblack px-2 py-1 inline-block rounded-md"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
