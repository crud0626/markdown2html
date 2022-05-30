import { useState } from 'react';
import './App.scss';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Section from './components/section/section';

function App() {
  const [sheet, setSheet] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  const changeSheet = () => {
    setSheet(sheet => (!sheet))
  }

  const changeDayNight = () => {
    const section = document.querySelector("section");
    if (darkmode) {
        section.classList.remove("dark");
    } else {
        section.classList.add("dark");
    }
    setDarkmode(darkmode => !darkmode);
  }


  return (
    <>
      <Header 
        changeSheet={changeSheet}
        onChangeDark={changeDayNight}
      />
      <Section 
        isSheet={sheet}
      />
      <Footer />
    </>
  );
}

export default App;
