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
      setLoading(false);
      setShowPassword(true);
      delay();
    }
    if (counter === 1 && password.length !== 0) {
      setCounter(counter + 1);
      setShowEmail(false);
      setShowPassword(false);
      setLoading(true);
    }
  }

  return (
    <div className="modal-component-content">
      {siteLanguage === "English" ? (
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
              <Fade left opposite collapse when={loading}>
                <ScaleLoader color="#36ba9b" loading={loading} size={15} />
              </Fade>
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
              <ScaleLoader color="#36ba9b" loading={loading} size={15} />
            </span>
          </div>
          <Fade left opposite collapse when={showEmail}>
            <button onClick={() => handleCounter()}>
              {SiteText[4]["pt-br"]}
            </button>
          </Fade>
          <Fade left opposite when={showPassword}>
            <button onClick={() => handleCounter()}>
              {SiteText[7]["pt-br"]}
            </button>
          </Fade>
        </div>
      )}
    </div>
  );
}
