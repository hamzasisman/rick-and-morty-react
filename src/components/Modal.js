export default function Modal(props) {

    const {
        modal,
        setModal,
        classes,
        children,
    } = props;


    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            {modal && (
                <>
                    <div onClick={() => toggleModal} className="modal-overlay"></div>
                    <div className={`modal ${classes.modal ? classes.modal : ""} `}>
                        <button onClick={toggleModal} className="modal-close-button"><span className=" opacity-80 hover:opacity-100">X</span></button>
                        <div className={`modal-content ${classes.content ? classes.content : ""}`}>
                            {children}
                        </div>
                        <button
                            className='bg-primary rounded-[10px] w-full max-w-[300px]  h-[40px] text-white text-center hover:opacity-80 focus:opacity-80'
                            type='button'
                            onClick={toggleModal}
                        >
                            Close
                        </button>
                    </div>
                </>
            )}
        </>
    );
}