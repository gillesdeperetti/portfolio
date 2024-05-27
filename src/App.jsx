import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${currentLanguage}`} />} />
      <Route path="/:lng/*" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
