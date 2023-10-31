import { useState } from "react";

const Navbar = () => {
  const menuLink = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="flex item-center justify-between">
        <div className="mx-7 ">
          <h4 className="text-5xl font-bold font-DancingScript  text-bggold">
            madhuka
          </h4>
        </div>
        <div className="md:block hidden font-medium  px-7 py-2 rounded-l-full">
          <ul className="flex items-center gap-20 py-2 text-lg">
            {menuLink.map((menu, i) => (
              <li key={i} className="hover:text-bggold text-bgwhite ">
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="z-[1] text-3xl md:hidden m-5 text-bgwhite"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden absolute w-2/3 h-screen font-medium bg-bgash top-0  p-20 
           ${open ? "right-0 " : "right-[-100%]"} duration-300`}
        >
          <ul className="flex flex-col justify-items-center h-full gap-10 py-2">
            {menuLink.map((menu, i) => (
              <li
                key={i}
                className="hover:text-bggold text-bgwhite relative group"
              >
                <a href={menu.link} className="nav relative hover:after">
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
