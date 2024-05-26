import { skillsWork, certifications } from "../../utils"; // Ajoutez certifications à partir de utils
import StackSkills from "../ui/StackSkills";
import StackCertifications from "../ui/StackCertifications";
import { FaCode, FaGraduationCap } from "react-icons/fa6";
import { TbBrandFunimation } from "react-icons/tb";
import SectionHeader from "../ui/SectionHeader";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const About = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0, transition: { duration: 0.8 }
        },
    };

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <section className="mt-5 max-w-5xl mx-auto md:px-8" id="about">
            <SectionHeader title={"About Me."} subtitle={"Skills, Certifications & Journey"} />

            <div className="text-secondary-text md:flex flex-row gap-16 px-4 md:px-0" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={control}
                    className="flex-1 text-base">
                    <p className="pb-3">
                    I excel in designing and deploying machine learning models and developing data-driven solutions. My proficiency with various tools and platforms enables me to handle diverse project requirements efficiently. Additionally, my solid experience in product management allows me to deliver comprehensive and impactful AI solutions. Based in Corsica, I am committed to driving innovation and excellence in every project I undertake.
                    </p>
    
                    {/* Nouvelle section */}
                    <div className="text-base pt-2">
                        <StackCertifications
                            title={"Certifications"}
                            list={certifications}
                            icon={<FaGraduationCap color="#326DFD" />}
                        />
                    </div>
                </motion.div>

                <div className="flex-1 pt-4 md:pt-0">
                    <StackSkills
                        title={"Tech Stack"}
                        list={skillsWork}
                        icon={<FaCode color="#326DFD" />} />

                </div>
            </div>
        </section>
    )
}

export default About;
