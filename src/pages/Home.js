import { useState, useEffect } from "react";
import "../css/home.css";
// import SiteText from "../data/SiteText.json";
import TranslatorComponent from "../components/translationComponent";
import SignatureComponent from "../components/signatureComponent";
import HomeMainComponent from "../components/homeMainComponent";
import HomeSignedInComponent from "../components/homeSignedInComponent";

export default function Home() {
  const [siteLanguage, setSiteLanguage] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function loadLanguage() {
    let language = localStorage.getItem("@sharewithme/language");

    if (language != null) {
      setSiteLanguage(language);
    } else {
      setSiteLanguage("English");
    }
  }

  function checkLoginState() {
    const timer = setTimeout(() => {
      if (!loggedIn) {
        setOpenModal(true);
        setLoggedIn(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }

  useEffect(() => {
    loadLanguage();

    checkLoginState();
  }, []);

  return (
    <div className="home-container">
      <div className="top-container">
        <TranslatorComponent
          siteLanguage={siteLanguage}
          setSiteLanguage={setSiteLanguage}
        />
      </div>

      {signedIn ? (
        <HomeSignedInComponent />
      ) : (
        <HomeMainComponent
          siteLanguage={siteLanguage}
          signedIn={signedIn}
          setSignedIn={setSignedIn}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}

      <SignatureComponent />
    </div>
  );
}

/*
The idea behind this project
1) Ability to create account
2) Send dedicated links for friends to send music links
3) Suggest for visitors to create their own link


url - .../language/user_id

implement this cool typewriter effect
https://www.youtube.com/watch?v=w1nhwUGsG6M

React-Spinners
https://www.npmjs.com/package/react-spinners
 */
