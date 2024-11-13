import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { LampContainer } from "./ui/lamp";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <section id="contact">
        <LampContainer>
          <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[70vw] text-gray-50">
              {"Excited to Create Value Together?"}
            </h1>
            <p className="text-purple md:mt-10 my-5 text-center">
              Let’s connect to discuss how my skills can bring impactful results
              to your team’s objectives.
            </p>
            <a href="mailto:mehtab.singh@edu.sait.ca">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </LampContainer>
      </section>
      <div className="flex mt-0 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {info.link ? (
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  <img src={info.img} alt="icon" width={20} height={20} />
                </a>
              ) : (
                <img src={info.img} alt="icon" width={20} height={20} />
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
