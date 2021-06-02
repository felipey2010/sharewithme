import { useState } from "react";
import "../../css/modal.css";
import closeBtn from "../../images/close.png";
import Fade from "react-reveal/Fade";
import SignInContent from "./SignInContent";

export default function SignIn({ openModal, setOpenModal, siteLanguage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <SignInContent
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              siteLanguage={siteLanguage}
              setOpenModal={setOpenModal}
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
