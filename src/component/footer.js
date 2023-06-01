import React, { useState } from "react";
import Read from '../commons/components/Modals/Modal';

const Footer = (props) => {
  const { setIsWrite } = props;

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="footer">
      <Read open={modalOpen} close={closeModal}>
      </Read>
      <img
        className="write"
        src="./img/펜.png"
        onClick={() => setIsWrite(true)}
      ></img>
      <img 
        className="read" 
        src="./img/일기보기.png"
        onClick={openModal}
      ></img>
    </div>
  );
};

export default Footer;
