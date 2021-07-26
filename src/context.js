import React, { useState, useContext,useEffect } from "react";
import Sidebar from "./Sidebar";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false);
 

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const openSidbar = () => {
    setSidebar(true);
  };
  const closeSidbar = () => {
    setSidebar(false);
  };

  const outSideClick=(ref,e)=>{
    if(ref.current !== e.target && !ref.current.contains(e.target)){
          closeModal();
          console.log(e.target)
    }
    
  }

  const sidebarEnd=()=>{
    // if(ref.current !== e.target){
      if(sidebar){
        closeSidbar();
      }
    console.log('ff');
  }

  
  return (
    <AppContext.Provider
      value={{
        sidebar,
        modal,
        openModal,
        closeModal,
        openSidbar,
        closeSidbar,
        outSideClick,
        sidebarEnd
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};





export { AppContext, AppProvider, useGlobalContext};
