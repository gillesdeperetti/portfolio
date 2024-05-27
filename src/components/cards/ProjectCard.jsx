"use client";
import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';
import { CardBody, CardContainer, CardItem } from "../ui/3DCard";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectCard = ({ project }) => {
    const { t } = useTranslation();
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className="overflow-hidden"
        >
            <CardContainer>
                <CardBody className="text-primary-text bg-third shadow-md bg-third relative group/card border-black/[0.1] w-auto lg:w-[25rem] h-auto rounded-xl p-4 border overflow-hidden">
                    <CardItem   
                        translateZ="50"
                        className="block mb-2 text-xl font-semibold"
                    >
                        {t(project.title)}
                    </CardItem>

                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-secondary-text text-base max-w-sm mt-2 overflow-hidden text-ellipsis"
                    >
                        {t(project.description)}
                    </CardItem>

                    <CardItem translateZ="100" className="w-full mt-4 overflow-hidden">
                        <img
                            src={project.image}
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>

                    <div className="flex flex-wrap mt-4 gap-2">
                        {project.techStack.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-200 rounded text-sm text-secondary-text whitespace-nowrap">
                                {t(tech)}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center mt-6">
                        {project.linkOnline &&
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl text-base text-secondary-text hover:text-secondary"
                            >
                                <Link to={project.linkOnline}>{t('demo')} →</Link>
                            </CardItem>
                        }

                        {project.linkGithub &&
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl text-white text-xl font-bold hover:bg-secondary"
                            >
                                <Link to={project.linkGithub}><FaGithub /></Link>
                            </CardItem>
                        }
                    </div>
                </CardBody>
            </CardContainer>
        </motion.div>
    );
}

export default ProjectCard;
