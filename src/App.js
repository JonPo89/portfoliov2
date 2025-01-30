import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Splash } from './components/Splash'
import { About } from './components/About';
import { Projects } from './components/Projects';
import useAnimatedLetters from './features/animateLetters';
import { fontList } from './features/fontList';
import { Contact } from './components/Contact';
import './App.css';

function App() {
  const [splashDisplay, setSplashDisplay] = useState("inline-flex");
    const [splashOpacity, setSplashOpacity] = useState(1);
    const [splashDescriptionOpacity, setSplashDescriptionOpacity] = useState(1);
    const [splashHeadingAlternate, setSplashHeadingAlternate] = useState(false);
    const [splashHeadingAnimate, setSplashHeadingAnimate] = useState(false);
    const [splashFolioTerSwap, setSplashFolioTerSwap] = useState(false);
    const [headingColour, setHeadingColour] = useState(null);
    const [headingFont, setHeadingFont] = useState("Lilita One");
    const [headingAnimate, setHeadingAnimate] = useState(true);

    //Change heading colour when mouse wheel scrolled
    useEffect(() => {
        const generateRandomColour = () => {
            const randomColour = Math.random() * 360;
            setHeadingColour(randomColour);
        }
        window.addEventListener("wheel", generateRandomColour);

        return () => {
            window.removeEventListener("wheel", generateRandomColour);
        }
    },[]);
       
    const headerNameAnimate = useAnimatedLetters("Jon Porter", headingAnimate, headingAnimate ? 0 : 50, headingAnimate ? 50 : 0, headingAnimate ? 1 : 0, headingAnimate ? 0 : 1, "#ffffff00", "#ffffff00", headingFont, headingColour)

    //Animate and swap to Splash Page
    const onClickToggleHome = () => {
        setSplashDisplay("inline-flex");
        setHeadingAnimate(true);
        setSplashFolioTerSwap(true);
        
        setTimeout(() => {
            setSplashOpacity(1);
        }, 500)
        setTimeout(() => {
            setSplashDescriptionOpacity(1);
            setSplashHeadingAnimate(false);
        }, 700)
        setTimeout(() => {
            setSplashHeadingAlternate(false);
        }, 1650)
        setTimeout(() => {
            setSplashFolioTerSwap(false);
        }, 1850)
    }

    //Animate and return to home page, when on splash screen
    const splashHeadingClick = () => {
        setHeadingColour(0);
        setHeadingFont("Lilita One");
        
        setSplashHeadingAlternate(true);
        setSplashHeadingAnimate(true);
        
        setTimeout(() => {
            setSplashOpacity(0);
        }, 950);

        setTimeout(() => {
            setSplashDisplay("none");
            setHeadingAnimate(false);
        }, 1350);
    }

    //Randomly change header font
    const headingClick = () => {
        let randomFontNo = Math.floor(Math.random() * fontList.length);

        setHeadingFont(fontList[randomFontNo]);
    }

  return (
    <div className="App">
      
      <BrowserRouter>
        <Splash 
            splashDisplay={splashDisplay}
            splashOpacity={splashOpacity}
            splashHeadingClick={splashHeadingClick}
            splashDescriptionOpacity={splashDescriptionOpacity}
            splashHeadingAnimate = {splashHeadingAnimate}
            splashHeadingAlternate={splashHeadingAlternate}
            splashFolioTerSwap = {splashFolioTerSwap}
            setSplashFolioTerSwap={setSplashFolioTerSwap}
        />
        <Header 
          onClickToggleHome= {onClickToggleHome} 
          headingClick={headingClick} 
          headingColour={headingColour}
          headingFont={headingFont}
          headerNameAnimate={headerNameAnimate}
        />
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
