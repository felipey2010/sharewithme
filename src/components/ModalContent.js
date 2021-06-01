import SiteText from "../data/SiteText.json";

export default function ModalContent({ musicURL, setMusicURL, siteLanguage }) {
  return (
    <div className="modal-component-content">
      {siteLanguage === "English" ? (
        <div className="modal-component-content-main">
          <h2>{SiteText[2].en}</h2>
          <div className="modal-component-content-main-input">
            <span>
              <input
                type="text"
                required
                className="clean-slide"
                id="link"
                placeholder={SiteText[4].en}
              />
              {/* <label for="link">Link</label> */}
            </span>
          </div>
          <button>{SiteText[3].en}</button>
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
              {/* <label for="link">Link</label> */}
            </span>
          </div>
          <button>{SiteText[3]["pt-br"]}</button>
        </div>
      )}
    </div>
  );
}
