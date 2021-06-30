import "../../css/login.css";
import { useState, useEffect } from "react";
import SignIn from "./signin";
import SignUp from "./signup";
import TranslatorComponent from "../../components/translationComponent";
import SignatureComponent from "../../components/signatureComponent";

export default function Login() {
  const [logState, toggleState] = useState(false);
  const [siteLanguage, setSiteLanguage] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function loadLanguage() {
    let language = localStorage.getItem("@sharewithme/language");

    if (language != null) {
      setSiteLanguage(language);
    } else {
      setSiteLanguage("English");
    }
  }

  function changeLogState() {
    toggleState(!logState);
    setErrorMessage("");
  }

  //   function checkLoginState() {
  //     const timer = setTimeout(() => {
  //       if (!loggedIn) {
  //         setOpenModal(true);
  //         setLoggedIn(false);
  //       }
  //     }, 1000);

  //     return () => clearTimeout(timer);
  //   }

  useEffect(() => {
    loadLanguage();
  }, []);

  return (
    <>
      {/* Site Translator  */}
      <div className="top-container">
        <TranslatorComponent
          siteLanguage={siteLanguage}
          setSiteLanguage={setSiteLanguage}
        />
      </div>

      <div className="login-container">
        <div className="error-container">
          <p>{errorMessage}</p>
        </div>
        <div className="form-container">
          {logState ? (
            <SignUp
              toggleState={changeLogState}
              siteLanguage={siteLanguage}
              setErrorMessage={setErrorMessage}
            />
          ) : (
            <SignIn
              toggleState={changeLogState}
              siteLanguage={siteLanguage}
              setErrorMessage={setErrorMessage}
            />
          )}
        </div>
      </div>
      <SignatureComponent />
    </>
  );
}
