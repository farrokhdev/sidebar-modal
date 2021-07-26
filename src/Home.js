import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import {useGlobalContext } from "./context";

const Home = () => {
  const {openSidbar,openModal,sidebarEnd} =useGlobalContext();
  

  return (
    <div className="main" onClick={sidebarEnd}>
      <div className="container">
        <button className="show-sidebar" onClick={openSidbar}>
          <FaBars className="sidebar-icon"/>
        </button>
        <button className="modal-btn" onClick={openModal}>show modal</button>
      </div>
    </div>
  );
};

export default Home;
