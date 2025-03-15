// import React from 'react';
// import { IoClose } from "react-icons/io5";
// import Modal from 'react-modal';
// import css from './ImageModal.module.css';

// export default function ImageModal ({ isOpen, onClose, photo }) {
//     if (!photo) return;
//     return (
//         <>
//           <Modal className={css.modal}
//            overlay ClassName={css.overlay}
//            isOpen={isOpen}
//            onRequestClose={onClose}>
//            <img src={photo.urls.regular} alt={photo.description} />
//            <p className={css.text}>{photo.description}</p>
//            <p className={css.text}>Likes: {photo.likes}</p>
//            <p className={css.text}>Author: {photo.user.name}</p>
//            <IoClose onClick={onClose} className={css.icon} />
//           </Modal>
//         </>
//     )
// }

import React from "react";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root"); 

export default function ImageModal({ isOpen, onClose, photo }) {
  if (!photo) return null; 

  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay} 
      isOpen={isOpen}
      onRequestClose={onClose} 
      shouldCloseOnOverlayClick={true} 
    >
      <button onClick={onClose} className={css.closeButton}>
        <IoClose size={24} />
      </button>
      <img src={photo.urls.regular} alt={photo.description} className={css.image} />
      <p className={css.text}>{photo.description}</p>
      <p className={css.text}>Likes: {photo.likes}</p>
      <p className={css.text}>Author: {photo.user.name}</p>
    </Modal>
  );
}

