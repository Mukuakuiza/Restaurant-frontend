import about from "../assets/about.jpeg"
import {ABOUT} from "../constants";
import {motion} from "framer-motion";

const About = () => {
    return (
        <section className="container mx-auto mb-8 " id="about">
            <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">About Us</h2>
            <div className="flex flex-wrap">
                <div className="w-full p-4 lg:w-1/2">
                    <img src={about} alt="About" className="rounded-3xl lg:-rotate-6"/>
                </div>
                <div className="w-full px-2 lg:w-1/2">
                    <motion.h2 initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
                               transition={{duration: 0.6, delay: 0.3}}
                               className="text-4xl tracking-tighter lg:text-6xl">
                        {ABOUT.header}
                    </motion.h2>
                    <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
                                transition={{duration: 0.6, delay: 0.5}}
                                className="mb-8 mt-1 h-2 w-32 bg-white lg:-rotate-3"></motion.div>
                    <motion.p  initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
                               transition={{duration: 0.6, delay: 0.7}} className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl">
                        {ABOUT.content}
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
export default About
