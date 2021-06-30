import { useState } from "react";
// import Fade from "react-reveal/Fade";
// import { ScaleLoader } from "react-spinners";
import SiteText from "../../data/SiteText.json";
export default function SignUp({ toggleState, siteLanguage, setErrorMessage }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister() {
    console.log("Register");
    setErrorMessage("");
  }

  return (
    <>
      <div className="form-title">
        {siteLanguage === "English" ? (
          <h3>{SiteText[13].en}</h3>
        ) : (
          <h3>{SiteText[13]["pt-br"]}</h3>
        )}
      </div>
      {siteLanguage === "English" ? (
        <div className="sign-in-form">
          <input
            type="text"
            required
            className="clean-slide"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder={SiteText[15].en}
          />
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
          <input
            type="password"
            required
            className="clean-slide"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder={SiteText[16].en}
          />
          <button onClick={() => handleRegister()}>{SiteText[8].en}</button>
          <p>
            Already registered? <span onClick={() => toggleState()}>Login</span>{" "}
          </p>
        </div>
      ) : (
        <div className="sign-in-form">
          <input
            type="text"
            required
            className="clean-slide"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder={SiteText[15]["pt-br"]}
          />
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
          <input
            type="password"
            required
            className="clean-slide"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder={SiteText[16]["pt-br"]}
          />
          <button onClick={() => handleRegister()}>
            {SiteText[8]["pt-br"]}
          </button>

          <p>
            Já tem conta? <span onClick={() => toggleState()}>Login</span>{" "}
          </p>
        </div>
      )}
    </>
  );
}
