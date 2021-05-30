import "../css/modal.css";
import closeBtn from "../images/close.png";

export default function Modal({ openModal, setOpenModal }) {
  return (
    <div className="modal-component">
      <div className="modal-component-top">
        <img
          src={closeBtn}
          alt="close"
          onClick={() => setOpenModal(!openModal)}
        />
      </div>
    </div>
  );
}
