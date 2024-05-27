import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { CustomButton } from "../buttons/CustomButton";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { sendEmail } from "../../services/email";
import SectionHeader from "../ui/SectionHeader";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Toast from "../ui/Toast";

const Contact = () => {
    const { t } = useTranslation();
    const [alert, setAlert] = useState('');
    const control = useAnimation();
    const [ref, inView] = useInView();
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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

    const handleSendMessage = async (event) => {
        event.preventDefault();

        if (!formData.email || !formData.subject || !formData.message) {
            setAlert(t('please_fill_in_all_fields'));
            setTimeout(() => {
                setAlert('');
            }, 3000);
            return;
        }

        try {
            const response = await sendEmail(formData);
            setAlert(t(response));
            if (response === "message_sent_successfully") {
                setFormData({ email: '', subject: '', message: '' });
            }
        } catch (error) {
            setAlert(t('error_sending_message'));
        }

        setTimeout(() => {
            setAlert('');
        }, 3000);
    };

    return (
        <section className="mt-5 max-w-6xl mx-auto md:px-8 pb-28" id="contact">
            <SectionHeader title={t('contact')} />

            <div className="flex items-stretch justify-center" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={control}
                    className="grid md:grid-cols-2 px-5 md:px-0">
                    <div className="pr-6">
                        <p className="mt-3 mb-12 text-base text-secondary-text text-center md:text-left">
                            {t('contact_description')}
                        </p>

                        <ul className="mb-6 md:mb-0">
                            {contactData.map((item, idx) =>
                                <a href={item.path} key={idx} target="_blank" rel="noopener noreferrer">
                                    <li className="flex mb-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-primary-text">
                                            {item.icon}
                                        </div>

                                        <div className="ml-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-primary-text">
                                                {t(item.title)}
                                            </h3>
                                            <p className="text-secondary-text">
                                                {t(item.info)}
                                            </p>
                                        </div>
                                    </li>
                                </a>
                            )}
                        </ul>
                        <div className="flex items-center">
                            <Toast message={alert} />
                        </div>
                    </div>

                    <form className="space-y-8" onSubmit={handleSendMessage} noValidate>
                        {/* Input Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-base font-medium text-secondary-text">
                                {t('your_email')}
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="shadow-sm bg-third border border-third text-primary-text text-base rounded-lg focus:ring-primary-500 block w-full p-2.5 placeholder-secondary-text focus:outline-none focus:ring-2 focus:border-secondary" 
                                placeholder={t('format_email')}
                                required
                                value={formData.email}
                                onChange={handleChange} />
                        </div>

                        {/* Subject Input */}
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-base font-medium text-secondary-text"
                            >
                                {t('subject')}
                            </label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="block p-3 w-full text-base text-primary-text bg-third rounded-lg border border-third shadow-sm placeholder-secondary-text focus:outline-none focus:ring-2 focus:border-secondary"
                                placeholder={t('subject_placeholder')}
                                required
                                value={formData.subject}
                                onChange={handleChange} />
                        </div>

                        {/* Message Input */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-base font-medium text-secondary-text"
                            >
                                {t('message')}
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                className="block p-2.5 w-full text-base text-primary-text bg-third rounded-lg shadow-sm border border-third placeholder-secondary-text focus:outline-none focus:ring-2 focus:border-secondary"
                                placeholder={t('message_placeholder')}
                                value={formData.message}
                                onChange={handleChange}
                                required >
                            </textarea>
                        </div>

                        <CustomButton
                            label={t('send_message')}
                            type="submit"
                        />
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

const contactData = [
    {
        title: "linkedin",
        icon: <FaLinkedin size={24} />,
        info: "connect_with_me",
        path: "https://www.linkedin.com/in/gillesdeperetti/"
    },
    {
        title: "github",
        icon: <FaGithub size={24} />,
        info: "explore_my_projects",
        path: "https://github.com/gillesdeperetti"
    },
    {
        title: "medium",
        icon: <FaMedium size={24} />,
        info: "read_my_articles",
        path: "https://medium.com/@gillesdeperetti"
    },
];

export default Contact;
