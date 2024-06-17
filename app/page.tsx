"use client"
import styles from "@/styles/style";
import { Navbar, Hero, Stats, Business, Billing, Demo, Testimonials, Clients, CTA, Footer, Objective } from "@/components"
const Home: React.FC = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Billing />
            <Objective/>
            <Business />
            <Demo/>
            <Clients />
            <Testimonials />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home