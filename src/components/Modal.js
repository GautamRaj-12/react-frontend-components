import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
    const[modalContainerClass,setModalContainerClass] = useState('modal__container')

    const handleShowButton = ()=>{
        setModalContainerClass(`${modalContainerClass} show-modal`)
    }
    const handleCloseButton = ()=>{
        setModalContainerClass('modal__container')
    }

  return (
    <>
      <button className='btn show-button' onClick={handleShowButton}>Click to Show</button>
      <div className={modalContainerClass}>
        <div className='modal'>
          <h2>Modal</h2>
          <p>This is a simple modal</p>
          <button className='btn close-button' onClick={handleCloseButton}>Close</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
