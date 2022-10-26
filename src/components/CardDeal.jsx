import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>Find a better card deal <br className={`sm:block hidden`}/> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio iste fugiat facere? Culpa ad inventore placeat similique, laborum eligendi, nesciunt illo suscipit voluptatibus et perspiciatis.</p>

      <Button styles="mt-10" text="View More"/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <img src={card} alt="card" />
      </div>
  </section>
)

export default CardDeal