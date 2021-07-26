import React,{useRef} from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { Link } from 'react-router-dom'
import {useGlobalContext } from "./context";

const Sidebar = () => {
  const {sidebar,closeSidbar} =useGlobalContext();
  const sideRef = useRef(null);

  
  

  return (
    <div className={`sidebar ${sidebar && 'show-side'}`} ref={sideRef}>
      <Link className="sidebar-logo">
        Logo.
      </Link>
      <Link className="close-sidebar" onClick={closeSidbar}>
        <FaTimes/>
      </Link>
      <div className="sidebar-links">
        {links.map((link)=>{
          const{id,url,icon,text}=link;
          return(
            <Link key={id} tp={url}>
              {icon}
              {text}
            </Link>
          )
        })}
      </div>
      <div className="sidebar-socials">
        <div className="fallow-us">
          follow us
        </div>
        {social.map((item)=>{
          const{id,url,icon}=item;
          return(
            <Link key={id} to={url}>
              {icon}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
