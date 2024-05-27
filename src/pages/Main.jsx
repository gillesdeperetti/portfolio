import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Blog from "../components/sections/Blog";
import Footer from "../components/sections/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Helmet } from "react-helmet";
import { metadata } from "../utils";
import { GeminiEffect } from "../components/sections/GeminiEffect.tsx";
import FloatingLanguageSelector from '../components/navbar/FloatingLanguageSelector';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { lng } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (lng && lng !== i18n.language) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    navigate(`/${lng}`);
  };

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

      <Hero />
      <About />
      <GeminiEffect />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
      <Analytics />
      <FloatingLanguageSelector onLanguageChange={handleLanguageChange} />
    </main>
  );
};

export default Main;
