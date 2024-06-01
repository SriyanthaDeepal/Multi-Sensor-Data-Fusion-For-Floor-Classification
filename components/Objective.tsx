import styles from "@/styles/style";
import { robot } from "@/public/assets";
import Image from "next/image";

const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY2}`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-10 px-6`}>
      <div className="flex flex-row justify-center items-center w-full text-center">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[30px] text-white ss:leading-[4px] leading-[40px]">
          <span className="text-gradient">Objective</span>{" "} <br></br>
        </h1>
      <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
          <p className={`${styles.paragraph} max-w-[500px] mt-5 text-justify ss:leading-[25px] leading-[40px]` }>
          The main objective of the research is to develop a flexible, high performance terrain 
          classification system that accurately identifies various terrain types under diverse 
          lighting conditions using decision-level fusion of multi sensor data.
          </p>
      </div>
      </div>
    </div>
    
    
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-center items-center w-full text-center">
        <p className={`${styles.paragraph} max-w-[450px] mt-5 text-justify ss:leading-[25px] leading-[40px]` }>
          This research holds profound potential for revolutionizing autonomous navigation systems by significantly 
          enhancing their reliability and accuracy. Its applications span diverse fields such as precision agriculture, 
          search and rescue operations, military reconnaissance, and urban transportation. By enabling these technologies 
          to perform safely and efficiently in real-world scenarios, our work aims to advance the capabilities and impact 
          of autonomous systems across various critical domains.
        </p>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[40px] text-white ss:leading-[40px] leading-[40px]">
          <span className="text-gradient">Significance and Application</span>{" "} <br></br>
        </h1>
      </div>
    </div>
    <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-4 relative`}>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>


    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-center items-center w-full text-center">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[40px] text-[30px] text-white ss:leading-[50px] leading-[40px]">
          <span className="text-gradient">Future Works</span>{" "} <br></br>
        </h1>
        <p className={`${styles.paragraph} max-w-[500px] mt-5 text-justify ss:leading-[25px] leading-[40px]` }>
          In our future work, we aim to incorporate higher-resolution cameras and advanced multi-dimensional 
          LiDAR sensors to further enhance classification accuracy and robustness. Additionally, we plan to 
          expand our dataset to include diverse environmental conditions and develop more sophisticated machine 
          learning models to address varying weather scenarios and broaden the range of terrain types classified.
        </p>
      </div>
    </div>
    <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
  
);

export default Hero;
