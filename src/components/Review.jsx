import {REVIEW} from "../constants";
import xaviour from '../assets/xaviour.jpeg'
import customer1 from "../assets/customer1.jpeg"
import customer2 from "../assets/customer2.jpeg"
import customer3 from "../assets/customer3.jpeg"
import customer4 from "../assets/customer4.jpeg"
import {motion} from "framer-motion";
const containerVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 1
        }
    }
}

const itemVariants = {
    hidden: {opacity: 0, y: 20},
    show: {
        opacity: 1, y: 0, transition: {
            duration: 0.6
        }
    }
}

const Review = () => {
    return (
        <section className="container mx-auto mb-8 mt-12" id="review">
            <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{once: true}}
                        className="flex flex-col">
                <motion.p variants={itemVariants}
                          className="mb-10 text-2xl font-light leading-normal tracking-tighter lg:mt-40 lg:mx-40 lg:text-[3rem]">
                    {REVIEW.content}
                </motion.p>
                <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
                    <img src={xaviour} alt={REVIEW.name} width={80} height={80} className="rounded-full border"/>
                    <div className="tracking-tighter">
                        <h6>{REVIEW.name}</h6>
                        <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" variants={itemVariants} viewport={{once: true}}
                        className="flex mt-14 flex-col items-center justify-center gap-2 md:flex-row">
                {[customer1,customer2, customer3, customer4].map((customer, idx)=>(
                    <motion.img variants={itemVariants} key={idx} src={customer} alt="customer"
                                className="h-[300px] w-[200px] pt-2 rounded-br-3xl rounded-tl-3xl object-cover"/>
                ))}
            </motion.div>
        </section>
    )
}
export default Review
