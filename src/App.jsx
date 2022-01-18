import { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Section from './components/section/section';

function App() {
  const [sheet, setSheet] = useState(false);

  const changeSheet = () => {
    setSheet(sheet => (!sheet))
  }

  return (
    <>
      <Header 
        changeSheet={changeSheet}
      />
      <Section 
        isSheet={sheet}
      />
      <Footer />
    </>
  );
}

export default App;
