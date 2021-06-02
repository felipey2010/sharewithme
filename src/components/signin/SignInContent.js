import { useState } from "react";
import SiteText from "../../data/SiteText.json";
import Fade from "react-reveal/Fade";

export default function SignInContent({
  email,
  password,
  setEmail,
  setPassword,
  siteLanguage,
  setOpenModal,
}) {
  const [counter, setCounter] = useState(0);
  const [showEmail, setShowEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  function delay() {
    const timer = setTimeout(() => {
      setShowPassword(true);
    }, 700);

    return () => clearTimeout(timer);
  }

  function handleCounter() {
    if (counter === 0 && email.length !== 0) {
      setCounter(counter + 1);
      setShowEmail(false);
      delay();
    } else {
      if (password.length !== 0) {
        setShowPassword(false);
      }
    }
  }

  return (
    <div className="modal-component-content">
      {siteLanguage === "English" ? (
        <div className="modal-component-content-main">
          {showEmail ? <h2>{SiteText[2].en}</h2> : <h2>{SiteText[3].en}</h2>}
          <div className="modal-component-content-main-input">
            <span>
              {showEmail ? (
                <input
                  type="text"
                  required
                  className="clean-slide"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={SiteText[5].en}
                />
              ) : (
                <input
                  type="password"
                  required
                  className="clean-slide"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder={SiteText[6].en}
                />
              )}
            </span>
          </div>
          <Fade left opposite collapse when={showEmail}>
            <button onClick={() => handleCounter()}>{SiteText[4].en}</button>
          </Fade>
          <Fade left opposite when={showPassword}>
            <button onClick={() => handleCounter()}>{SiteText[7].en}</button>
          </Fade>
        </div>
      ) : (
        <div className="modal-component-content-main">
          <h2>{SiteText[2]["pt-br"]}</h2>
          <div className="modal-component-content-main-input">
            <span>
              <input
                type="text"
                required
                className="clean-slide"
                id="link"
                placeholder={SiteText[4]["pt-br"]}
              />
            </span>
          </div>
          <button onClick={() => handleCounter()}>
            {SiteText[3]["pt-br"]}
          </button>
        </div>
      )}
    </div>
  );
}
