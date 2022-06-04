import { useState } from 'react';
import './App.scss';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Section from './components/section/section';

const App = () => {
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleSheet = () => {setIsOpenSheet(isOpenSheet => !isOpenSheet)};
  const handleDarkMode = () => {
    isDark ? window.localStorage.removeItem("data-dark") 
    : window.localStorage.setItem("data-dark", true);

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
