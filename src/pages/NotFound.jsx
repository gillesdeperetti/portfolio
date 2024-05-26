import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa"; // Assurez-vous d'importer les icônes nécessaires
import { metadata } from "../utils";

const contactData = [
    {
        title: "LinkedIn",
        icon: <FaLinkedin size={24} />,
        info: "Connect with me",
        path: "https://www.linkedin.com/in/gillesdeperetti/"
    },
    {
        title: "GitHub",
        icon: <FaGithub size={24} />,
        info: "Explore my projects",
        path: "https://github.com/gillesdeperetti"
    },
    {
        title: "Medium",
        icon: <FaMedium size={24} />,
        info: "Read my articles",
        path: "https://medium.com/@gillesdeperetti"
    },
];

const NotFound = () => {
    return (
        <main>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{metadata.title}</title>
                <link rel="canonical" href={metadata.pageUrl} />
                <meta name="description" content={metadata.description} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:image" content={metadata.imageURL} />
                <meta property="og:url" content={metadata.pageUrl} />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="h-screen w-full flex flex-col justify-center items-center bg-primary text-primary-text">
                <h1 className="text-[10rem] font-extrabold tracking-widest">404</h1>

                <div className="bg-secondary px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>

                <button className="mt-5">
                    <Link to="/" className="relative inline-block text-sm font-medium text-secondary group active:text-[#6b90bd] focus:outline-none focus:ring">
                        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-secondary group-hover:translate-y-0 group-hover:translate-x-0"></span>
                        <span className="relative block px-8 py-3 bg-primary border border-current">Go Home</span>
                    </Link>
                </button>

                <div className="mt-10 flex space-x-4">
                    {contactData.map((contact, index) => (
                        <a
                            key={index}
                            href={contact.path}
                            className="flex items-center space-x-2 text-primary-text hover:text-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contact.icon}
                            <span>{contact.info}</span>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default NotFound;
