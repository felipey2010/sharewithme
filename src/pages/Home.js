import { useState, useEffect } from "react";
import "../css/home.css";
import SiteText from "../data/SiteText.json";
import Modal from "../components/Modal";
import Slide from "react-reveal/Slide";

export default function Home() {
  const [siteLanguage, setSiteLanguage] = useState("");
  const [openModal, setOpenModal] = useState(false);

  async function handleLanguage(value) {
    setSiteLanguage(value);
    localStorage.setItem("@sharewithme/language", value);
  }

  function handleModal() {
    setOpenModal(!openModal);
  }

  useEffect(() => {
    let language = localStorage.getItem("@sharewithme/language");

    if (language != null) {
      setSiteLanguage(language);
    } else {
      setSiteLanguage("English");
    }
  }, []);

  return (
    <div className="home-container">
      <div className="top-container">
        <div className="right-container">
          <select
            name="languages"
            id="languages"
            value={siteLanguage}
            onChange={e => handleLanguage(e.target.value)}>
            <option value="English">English</option>
            <option value="Português">Português</option>
          </select>
        </div>
      </div>

      <div className="main-container">
        <Slide top>
          <h4>
            {siteLanguage === "English" ? SiteText[0].en : SiteText[0]["pt-br"]}
          </h4>
        </Slide>
        <Slide bottom>
          <button onClick={() => handleModal()}>
            {siteLanguage === "English" ? SiteText[1].en : SiteText[1]["pt-br"]}
          </button>
        </Slide>
      </div>
      {openModal && (
        <div className="modal-container">
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            siteLanguage={siteLanguage}
          />
        </div>
      )}
    </div>
  );
}