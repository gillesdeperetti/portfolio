import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, animateScroll } from 'react-scroll';
import { fixedNavItems } from '../../utils';
import logo from "../../assets/images/logo-spark-mind.webp";  

const FixedNavBar = () => {
    const { t } = useTranslation();
    const [state, setState] = useState(false);

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, []);

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <Link to={'/'} className="flex items-center gap-2 group">
                <img
                    src={logo}
                    alt="Logo"
                    className='rounded-full border-2 border-secondary'
                    style={{
                        width: '3rem',  
                        height: '3rem'  
                    }}
                />
            </Link>

            <div className="md:hidden">
                <button className="menu-btn text-gray-400 hover:text-gray-300"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    );

    return (
        <header>
            <nav className={`pb-1 md:text-sm mx-auto md:px-48 ${state ? "absolute z-20 top-0 inset-x-0 bg-primary rounded-xl mx-2 mt-0 md:mx-0 md:mt-0 md:relative md:bg-transparent pb-4" : ""}`}>
                <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                    <Brand />

                    <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                        <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {
                                fixedNavItems.map((navItem, idx) => {
                                    return (
                                        <li key={idx} className="text-gray-300 transition-li hover:transform-li text-base">
                                            <Link
                                                to={
                                                    navItem.name.replace('nav_', '').toLocaleLowerCase()
                                                }
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                offset={-50}
                                                activeClass="active"
                                                className="block cursor-pointer">
                                                {t(navItem.name)}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default FixedNavBar;
