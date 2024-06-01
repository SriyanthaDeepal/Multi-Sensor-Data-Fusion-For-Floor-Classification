import { apple, bill, google } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Image from "next/image";
const Billing: React.FC = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About Our Project 
      </h2>
      <p className={`${styles.paragraph2} max-w-[470px] mt-5`}>
      Our research focuses on creating a robust terrain classification system for 
      autonomous robots by integrating data from both camera and LiDAR sensors. Leveraging 
      decision-level fusion techniques, we combine the strengths of Convolutional Neural Networks (CNNs) 
      for visual data and Support Vector Machines (SVMs) for distance measurements. This approach ensures 
      accurate and reliable terrain classification under varying lighting conditions, making the system 
      adaptable to different robot designs. By addressing the limitations of individual sensor modalities 
      and enhancing performance through data fusion, our research contributes to advancing the field of 
      autonomous navigation and sensor fusion technology.
      </p>
      </div>
      <Image
        src={bill}
        alt="billing"
        className="w-[40%] h-[40%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
  </section>
);

export default Billing;
