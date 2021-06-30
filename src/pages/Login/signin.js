import { useState } from "react";
// import Fade from "react-reveal/Fade";
// import { ScaleLoader } from "react-spinners";
import SiteText from "../../data/SiteText.json";

export default function SignIn({ toggleState, siteLanguage, setErrorMessage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (email === "" || password === "") {
      if (siteLanguage === "English") {
        setErrorMessage("Please fill all the fields");
      } else {
        setErrorMessage("Por favor, preencha todos os campos");
      }
    } else {
      setErrorMessage("");
      console.log("Login");
    }
  }

  return (
    <>
      <div className="form-title">
        <h3>Login</h3>
      </div>
      {siteLanguage === "English" ? (
        <div className="sign-in-form">
          <input
            type="text"
            required
            className="clean-slide"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={SiteText[5].en}
          />
          <input
            type="password"
            required
            className="clean-slide"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={SiteText[6].en}
          />
          <button onClick={() => handleLogin()}>{SiteText[7].en}</button>
          <p>
            Don't have an account?{" "}
            <span onClick={() => toggleState()}>{SiteText[12].en}</span>{" "}
          </p>
        </div>
      ) : (
        <div className="sign-in-form">
          <input
            type="text"
            required
            className="clean-slide"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={SiteText[5]["pt-br"]}
          />
          <input
            type="password"
            required
            className="clean-slide"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={SiteText[6]["pt-br"]}
          />
          <button onClick={() => handleLogin()}>{SiteText[7]["pt-br"]}</button>
          <p>
            Não tem conta?{" "}
            <span onClick={() => toggleState()}>{SiteText[12]["pt-br"]}</span>{" "}
          </p>
        </div>
      )}
    </>
  );
}
