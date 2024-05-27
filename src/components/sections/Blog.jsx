import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from "../ui/SectionHeader";
import { articles } from "../../utils";
import ArticleCard from "../cards/ArticleCard";

const Blog = () => {
    const { t } = useTranslation();

    return (
        <section className="mt-14 max-w-7xl mx-auto md:px-8" id="blog">
            <SectionHeader title={t('blog')} subtitle={t('tech_trends_reflections')} />

            <div className="flex justify-center items-center mt-2">
                <div className="grid grid-cols-1 md:grid-cols-3 px-7 md:px-0 gap-5">
                    {articles.map((article, idx) => (
                        <ArticleCard 
                            key={idx} 
                            article={{ 
                                ...article, 
                                title: t(article.title), 
                                resume: t(article.resume) 
                            }} 
                        />
                    ))}
                </div>
            </div>

            <div className="p-2 pt-4 text-center mt-2">
                <a href="https://medium.com/@gillesdeperetti"
                    className="align-middle text-center font-medium uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 rounded-lg hover:bg-[#6b90bd] text-white shadow-md shadow-gray-900/10 hover:shadow-lg bg-secondary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    {t('see_more')}
                </a>
            </div>
        </section>
    );
}

export default Blog;
