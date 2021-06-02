import { useState } from "react";
import "../../css/modal.css";
import closeBtn from "../../images/close.png";
import Fade from "react-reveal/Fade";
import SignUpContent from "./SignUpContent";

export default function SignUp({ openModal, setOpenModal, siteLanguage }) {
  const [musicURL, setMusicURL] = useState("");
  return (
    <div>
      <Fade bottom>
        <div className="modal-component">
          <div className="modal-component-top">
            <img
              src={closeBtn}
              alt="close"
              onClick={() => setOpenModal(!openModal)}
            />
          </div>
          <div className="modal-component-main">
            <SignUpContent
              musicURL={musicURL}
              setMusicURL={setMusicURL}
              siteLanguage={siteLanguage}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}

/*
https://codepen.io/maheshambure21/pen/EozKKy

https://codepen.io/MichaelArestad/pen/ohLIa
*/
