import { useState } from "react";
import SiteText from "../data/SiteText.json";
import SignIn from "./signin/SignIn";
import Slide from "react-reveal/Slide";

export default function HomeMainComponent({
  siteLanguage,
  signedIn,
  setSignedIn,
  openModal,
  setOpenModal,
}) {
  function handleModal() {
    setOpenModal(!openModal);
  }

  return (
    <>
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
          <SignIn
            openModal={openModal}
            setOpenModal={setOpenModal}
            siteLanguage={siteLanguage}
            signedIn={signedIn}
            setSignedIn={setSignedIn}
          />
        </div>
      )}
    </>
  );
}
