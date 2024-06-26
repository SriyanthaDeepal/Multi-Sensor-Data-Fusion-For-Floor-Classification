import styles from "@/styles/style";
import { robot } from "@/public/assets";
import Image from "next/image";

const Hero: React.FC = () => (
  <section id="home" className={`flex flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-center items-center w-full text-center">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[25px] text-[30px] text-white ss:leading-[40px] leading-[40px]">
        <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Project Demonstration</span>{" "} <br />
        </h1>
      </div>
    </div>
    <div className={`${styles.flexCenter} flex-1 flex my-0 relative`}>
      <video width="600" controls>
          <source src="/assets/demovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="absolute z-[0] w-[30%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[70%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[40%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
