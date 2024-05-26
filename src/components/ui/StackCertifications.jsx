import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const StackCertifications = ({ title, icon, list }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const staggerVariants = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    }

    return (
        <div className="pb-10" ref={ref}>
            <h4
                className="text-xl font-bold pb-3 text-primary-text flex gap-3 items-center">
                {icon} {title}
            </h4>

            <motion.div
                variants={container}
                initial="hidden"
                animate={control}
                className="grid grid-cols-1 md:grid-cols-1 gap-2">
                {list.map((item, idx) =>
                    <motion.a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={staggerVariants}
                        animate={control}
                        key={idx}
                        className="py-1 text-base bg-third rounded-full text-secondary-text text-center"
                    >
                        <div>
                            {item.title} - <span className="text-primary-text" style={{ color: '#326DFD' }}>{item.school}</span>
                        </div>
                    </motion.a>
                )}
            </motion.div>
        </div>
    )
}

export default StackCertifications;
