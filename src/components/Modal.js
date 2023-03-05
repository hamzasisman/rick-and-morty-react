import OutsideClickHandler from "react-outside-click-handler";


const Modal = (props) => {

    const {
        modal,
        setModal,
        children,
        classes,
    } = props;

    return (
        <>
            {modal && (
                <>
                    <div className="modal-overlay"></div>
                    <div className={`modal ${classes.modal ? classes.modal : ""} `}>
                        <button onClick={() => setModal(!modal)} className="modal-close-button"><span className="opacity-80 hover:opacity-100">X</span></button>

                        <OutsideClickHandler onOutsideClick={() => setModal(!modal)}>
                            <div className="modal-content">
                                {children}
                            </div>
                        </OutsideClickHandler>

                    </div>
                </>
            )}
        </>
    );
}

export default Modal;