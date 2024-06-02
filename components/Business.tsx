import styles, { layout } from "@/styles/style";
import { features } from "@/constants";
import Button from "./Button";
import Image from "next/image";
import { FeatredCardProps } from "@types";

const FeaturesCard: React.FC<FeatredCardProps> = ({ icon, title, content, index }) => (
  <div className={`flex flex-row w-[1000px] h-[80px] p-2 rounded-[20px] ml-5 ${index !== features.length - 1 ? " mb-1" : "mb-0" } feature-card`}>
    <div className={`w-[35px] h-[35px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
      <Image src={icon} alt="icon" className="w-[40%] h-[40%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[16px] leading-[20px]">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);
const Business: React.FC = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Key Features
      </h2>
      <p className={`${styles.paragraph} mt-5 mb-7`}>
        Our terrain classification system is designed to provide accurate, 
        reliable performance across diverse environments by leveraging advanced 
        sensor fusion techniques. Here are the key features that make our 
        product stand out.
      </p>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeaturesCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
