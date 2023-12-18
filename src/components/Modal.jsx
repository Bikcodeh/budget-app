import CloseIcon from "../assets/cerrar.svg";

export const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseIcon} alt="Close Modal" onClick={ () => closeModal() } />
      </div>
      <span>Soy el modal</span>
    </div>
  );
};
