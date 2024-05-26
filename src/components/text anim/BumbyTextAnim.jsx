import { motion } from 'framer-motion';
import { FaStarOfLife } from 'react-icons/fa6';

const BumbyTextAnim = ({ text, className }) => {
    const spanVariants = {
        visible: { y: 0, scaleY: 1 },
        hover: {
            y: [-1, -2, -2.8, 0.9, 0],
            scaleY: [1, 1.3, 0.8, 1, 1.2],
            color: "#326DFD",
        }
    };

    return (
        <h4>
            {text.split("").map((letter, idx) =>
                <motion.span
                    key={idx}
                    variants={spanVariants}
                    initial="visible"
                    whileHover="hover"
                    style={{ display: "inline-block" }}
                    className={className}
                >
                    {letter === " " ? "\u00A0" :
                        (
                            letter === "." ? <FaStarOfLife className="text-secondary" style={{ fontSize: '0.6em', position: 'relative', top: '-0.6em' }} /> : letter
                        )}
                </motion.span>
            )}
        </h4>
    );
}

export default BumbyTextAnim;
