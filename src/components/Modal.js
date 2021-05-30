import "../css/modal.css";
import closeBtn from "../images/close.png";
import Fade from "react-reveal/Fade";

export default function Modal({ openModal, setOpenModal }) {
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
        </div>
      </Fade>
    </div>
  );
}
