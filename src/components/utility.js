import { forwardRef } from "react";

export const CloseModal = (ref, overlayRef) => {
    ref.current.classList.add('hidden');
    ref.current.classList.remove('flex');
    overlayRef.current.classList.add('hidden');
}

export const OpenModal = (overlay, modal) => {
    overlay.current.classList.remove('hidden');
    modal.current.classList.add('flex');
    modal.current.classList.remove('hidden');
}

export const ModalOverlay = forwardRef((props, ref) => {
    return (
        <>
            <div ref={ref} id="overlay" className="fixed hidden z-40 w-screen h-screen inset-0 bg-[#333333] bg-opacity-70"></div>
        </>
    )
})