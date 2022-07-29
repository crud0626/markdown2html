import { useState } from 'react';
import './App.scss';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Section from './components/section/section';

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
