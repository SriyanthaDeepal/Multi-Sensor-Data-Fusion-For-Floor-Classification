import { feedback, feedback2 } from "@/constants";
import styles from "@/styles/style";
import FeedbackCard from "./FeedbackCard";
const Testimonials: React.FC = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative sm:mt-10`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div className="w-full flex flex-col items-center text-center sm:mb-10 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        Our Team
      </h1>
    </div>
    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback2.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
