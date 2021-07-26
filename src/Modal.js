import React,{useRef,useEffect} from "react";
import { FaTimes } from "react-icons/fa";
import {useGlobalContext } from "./context";

const Modal = () => {
  const {modal,closeModal,outSideClick} =useGlobalContext();
  const modalRef = useRef(null);
  
 
  return (
    <div className={`modal container ${modal && 'show-modal'}`} onClick={(e)=>outSideClick(modalRef,e)}>
      <div className="modal-wrap" ref={modalRef}>
        <button className="closemodal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        <h2>this is modal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae porro,
          soluta dolorem unde nam perferendis, quia, cum est accusantium placeat
          consequatur nobis asperiores ullam? Nulla eius voluptas ipsam adipisci
          ut!
        </p>
      </div>
    </div>
  );
};

export default Modal;
