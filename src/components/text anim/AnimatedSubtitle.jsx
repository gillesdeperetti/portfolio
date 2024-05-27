import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const AnimatedSubtitle = ({ text, className }) => {
    const { i18n } = useTranslation();
    const letters = Array.from(text);

    // Définir l'index de changement de couleur en fonction de la langue
    const colorChangeIndex = i18n.language === 'fr' ? 7 : 6; // 'Je suis' : 7, 'I'm a ' : 6

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
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
    };

    return (
        <motion.h4
            style={{ overflow: "hidden", display: "flex", }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {
                        letter === " " ? "\u00A0" :
                            (
                                index >= colorChangeIndex ? <span className="text-secondary">{letter}</span> : letter
                            )
                    }
                </motion.span>
            ))}
        </motion.h4>
    );
};

export default AnimatedSubtitle;
