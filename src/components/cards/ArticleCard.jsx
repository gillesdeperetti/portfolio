import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

const ArticleCard = ({ article }) => {
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
            className="relative flex flex-col justify-between mt-2 text-primary-text bg-third shadow-md bg-clip-border rounded-xl sm-80 md:w-[21rem] lg:w-[25rem] mb-3">
            <div>
                <div className="relative mx-4 mt-4 overflow-hidden shadow-lg bg-clip-border rounded-xl shadow-blue-gray-500/40">
                    <img
                        src={article.image}
                        height="100"
                        width="100"
                        className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 text-xl font-semibold">
                        {t(article.title)}
                    </h5>
                    <p className="block text-base text-secondary-text">
                        {t(article.resume)}
                    </p>
                </div>
            </div>
            <div className="flex justify-center p-6 pt-0">
                <a href={article.url}
                    className="align-middle text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-z py-3 px-6 rounded-lg hover:bg-secondary text-white shadow-md shadow-gray-900/10 hover:shadow-lg bg-primary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    {t('read_more')}
                </a>
            </div>
        </motion.div>
    )
}

export default ArticleCard;
