import styles from "@/styles/style";
import { stats } from "@/constants";
const Stats: React.FC = () => (
  <section className={`${styles.flexCenter} flex flex-wrap sm:mb-10 mb-6`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className="flex-1 flex justify-center items-center flex-col m-3 text-center"
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase mt-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
