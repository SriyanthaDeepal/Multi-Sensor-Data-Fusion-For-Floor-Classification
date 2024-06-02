import { quotes } from "@/public/assets";
import { FeedBackProps } from "@types";
import Image from "next/image";

const FeedbackCard: React.FC<FeedBackProps> = ({
  content,
  title,
  name,
  img,
}) => (
  <div className="flex justify-between flex-col px-6 py-6 rounded-[20px] max-w-[400px] md:mr-10 sm:mr-5 mr-0 feedback-card cursor-pointer">
    
    
    <div className="flex flex-row">
      <Image
        src={img}
        alt={name}
        className="rounded-full"
        width={80}
        height={80}
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[16px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[14px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
