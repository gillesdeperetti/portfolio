import React, { useEffect, useState } from 'react';
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
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    if (lng && lng !== i18n.language) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    navigate(`/${lng}`);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + window.innerHeight / 2;
    
    sections.forEach(section => {
      if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        setCurrentSection(section.getAttribute('id'));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metadata.sections[currentSection]?.title || metadata.site.title}</title>
        <link rel="canonical" href={metadata.site.pageUrl} />
        <meta name="description" content={metadata.sections[currentSection]?.description || metadata.site.description} />
        <meta property="og:title" content={metadata.sections[currentSection]?.title || metadata.site.title} />
        <meta property="og:description" content={metadata.sections[currentSection]?.description || metadata.site.description} />
        <meta property="og:image" content={metadata.sections[currentSection]?.imageURL || metadata.site.imageURL} />
        <meta property="og:url" content={metadata.site.pageUrl} />
        <meta property="og:type" content="website" />
        <link rel="alternate" href="https://portfolio.sparkmind.me/en" hreflang="en" />
        <link rel="alternate" href="https://portfolio.sparkmind.me/fr" hreflang="fr" />
      </Helmet>

      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><GeminiEffect /><Projects /></section>
      <section id="blog"><Blog /></section>
      <section id="contact"><Contact /></section>
      <Footer />
      <Analytics />
      <FloatingLanguageSelector onLanguageChange={handleLanguageChange} />
    </main>
  );
};

export default Main;
