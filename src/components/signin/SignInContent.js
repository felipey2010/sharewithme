import { useState } from "react";
import SiteText from "../../data/SiteText.json";
import Fade from "react-reveal/Fade";
import { ScaleLoader } from "react-spinners";

export default function SignInContent({
  email,
  password,
  setEmail,
  setPassword,
  siteLanguage,
  setOpenModal,
  signedIn,
  setSignedIn,
}) {
  const [counter, setCounter] = useState(0);
  const [showEmail, setShowEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);

  function delay(value) {
    const timer = setTimeout(() => {
      if (value === 1) setShowPassword(true);

      if (value === 2) {
        setLoading(false);
        setAuth(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }

  function handleCounter() {
    if (counter === 0 && email.length !== 0) {
      setCounter(counter + 1);
      setShowEmail(false);
      setLoading(false);
      delay(1);
      setShowPassword(true);
    }
    if (counter === 1 && password.length !== 0) {
      setCounter(counter + 1);
      setShowEmail(false);
      setShowPassword(false);
      setLoading(true);
    }
  }

  async function handleAuthenticate() {
    handleCounter();

    if (email === "admin@admin.com" && password === "admin") {
      delay(2);
    } else {
      setCounter(0);
    }
  }

  return (
    <div className="modal-component-content">
      {siteLanguage === "English" ? (
        // English Version
        <div className="modal-component-content-main">
          {showEmail && <h2>{SiteText[2].en}</h2>}
          {showPassword && <h2>{SiteText[3].en}</h2>}
          {loading && <h2>{SiteText[11].en}</h2>}
          <div className="modal-component-content-main-input">
            <span>
              {showEmail && (
                <input
                  type="text"
                  required
                  className="clean-slide"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={SiteText[5].en}
                />
              )}

              {showPassword && (
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
            {loading && (
              <ScaleLoader color="#36ba9b" loading={loading} size={15} />
            )}

            {auth && <h2>Authenticated</h2>}
          </div>
          <Fade left opposite collapse when={showEmail}>
            <button onClick={() => handleCounter()}>{SiteText[4].en}</button>
          </Fade>
          <Fade left opposite when={showPassword}>
            <button onClick={() => handleAuthenticate()}>
              {SiteText[7].en}
            </button>
          </Fade>

          <div className="modal-component-content-main-register">
            <p>{SiteText[12].en}</p>
          </div>
        </div>
      ) : (
        // Portuguese Version
        <div className="modal-component-content-main">
          {showEmail && <h2>{SiteText[2]["pt-br"]}</h2>}
          {showPassword && <h2>{SiteText[3]["pt-br"]}</h2>}
          {loading && <h2>{SiteText[11]["pt-br"]}</h2>}
          <div className="modal-component-content-main-input">
            <span>
              {showEmail && (
                <input
                  type="text"
                  required
                  className="clean-slide"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={SiteText[5]["pt-br"]}
                />
              )}

              {showPassword && (
                <input
                  type="password"
                  required
                  className="clean-slide"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder={SiteText[6]["pt-br"]}
                />
              )}
            </span>
            {loading && (
              <ScaleLoader color="#36ba9b" loading={loading} size={15} />
            )}
          </div>
          <Fade left opposite collapse when={showEmail}>
            <button onClick={() => handleCounter()}>
              {SiteText[4]["pt-br"]}
            </button>
          </Fade>
          <Fade left opposite when={showPassword}>
            <button onClick={() => handleAuthenticate()}>
              {SiteText[7]["pt-br"]}
            </button>
          </Fade>

          <div className="modal-component-content-main-register">
            <p>{SiteText[12]["pt-br"]}</p>
          </div>
        </div>
      )}
    </div>
  );
}
