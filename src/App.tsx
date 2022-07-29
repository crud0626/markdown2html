import { useState } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section from './components/Section/Section';

const App = () => {
  const [isOpenSheet, setIsOpenSheet] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleSheet = (): void => setIsOpenSheet(isOpenSheet => !isOpenSheet);
  const handleDarkMode = (): void => {
    isDark ? window.localStorage.removeItem("data-dark") 
    : window.localStorage.setItem("data-dark", "true");

    setIsDark(isDark => !isDark);
  };

  return (
    <>
      <Header 
        handleSheet={handleSheet}
        handleDarkMode={handleDarkMode}
      />
      <Section 
        isSheet={isOpenSheet}
        isDark={isDark}
      />
      <Footer />
    </>
  );
}

export default App;
