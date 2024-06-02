import { clients } from "@/constants";
import styles from "@/styles/style";
import Image from "next/image";
const Clients: React.FC = () => (
  <section className={`${styles.flexCenter} my-4 mt-20 mb-20` }>
    
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[170px] min-x-[120px] `}>
          <Image src={client.logo} alt="client" className="sm:w-[210px] w-[100%] object-contain hover:-translate-y-2 cursor-pointer transition-all ease-in-out" />
        </div>
      ))}
    </div>
  </section>

  
);
export default Clients;