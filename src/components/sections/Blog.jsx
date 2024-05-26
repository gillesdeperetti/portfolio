import SectionHeader from "../ui/SectionHeader";
import { articles } from "../../utils";
import ArticleCard from "../cards/ArticleCard";

const Blog = () => {
    return (
        <section className="mt-14 max-w-7xl mx-auto md:px-8" id="blog">
            <SectionHeader title={"Blog."} subtitle={"Tech Trends & Reflections"} />

            <div className="flex justify-center items-center mt-2">
                <div className="grid grid-cols-1 md:grid-cols-3 px-7 md:px-0 gap-5">
                    {articles.map((article, idx) => (
                        <ArticleCard article={article} key={idx} />
                    ))}
                </div>
            </div>

            <div className="p-2 pt-4 text-center mt-2">
                <a href="https://medium.com/@gillesdeperetti"
                    className="align-middle text-center font-medium uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 rounded-lg hover:bg-[#6b90bd] text-white shadow-md shadow-gray-900/10 hover:shadow-lg bg-secondary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    See More
                </a>
            </div>
        </section>)
}

export default Blog