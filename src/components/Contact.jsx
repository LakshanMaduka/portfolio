import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "mblmsenevirathne@gmail.com" },
    { logo: "logo-whatsapp", text: "+94 768476646" },
    {
      logo: "location",
      text: "Karandeniya,Galle",
    },
  ];
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_blb5dk7",
        "template_c21hu7p",
        form.current,
        "tbQ-c3NUIWQwfcfUp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-bggold">Me</span>
        </h3>
        <p className="text-gray-400 my-5 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-bgash md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5"
          >
            <input type="text" name="user_name" placeholder="Your Name" />
            <input
              type="Email"
              name="user_email"
              placeholder="Your Email Address"
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              name="message"
            ></textarea>
            <button className="btn-primary w-fit " type="submit">
              Send Message
            </button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-bggold bg-bgblack rounded-full border-2 border-bggold">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
