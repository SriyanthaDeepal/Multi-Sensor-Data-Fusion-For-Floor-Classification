import styles from "@/styles/style";
import { robot } from "@/public/assets";
import Image from "next/image";
import Video from '../public/Demovideo.mp4';


const Hero: React.FC = () => (
  <section id="home" className={`flex flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
      
    </div>
    <div className={`${styles.flexCenter} flex-1 flex my-0 relative`}>
      <video className="w-full" controls>
        <source src="Video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-[0] w-[30%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[70%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[40%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
