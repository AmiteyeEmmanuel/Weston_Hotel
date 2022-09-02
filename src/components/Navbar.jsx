import React, {useState} from 'react';
import styled from 'styled-components';
import logo  from "../assets/Logo.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { useScroll } from "../components/useScroll";
import { motion } from 'framer-motion';
import { navAnimation } from "../animation";


function Navbar() {
  const [isNavOpen ,setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();
  return (<Nav ref={element}
  variants = {navAnimation}
  transition ={{ delay: 0.2 }}
  animate = {controls}
  state = { isNavOpen ? 1 : 0}
  >
    <div className="brand__container">
      <a href="#" className = 'brand'>  
        <img src={logo} alt="logo" className="logo" />
        </a>
        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={ () => setIsNavOpen(false)}/>
          ) : (
            <GiHamburgerMenu 
            onClick={ (e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
            />
          )}
          </div>     
    </div>
    <div className={`links ${isNavOpen ? "show" :  ""}`}>
      <ul>
        <li className="active">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#room">Room</a>
        </li>
        <li>
          <a href="#blog">BLOG</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#entertainment"> VIEWS</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </Nav>
  )
}

const Nav = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    margin: 0 3rem;
    color: #c0b5b5;
    padding-top: 1rem;
    .brand__container{
      margin: 0 1rem;
      .logo{
        width: 10rem;
        height: 5rem;
      }
      .toggle{
        display: none;
      }
    }
    .links{
      ul{
        list-style-type:none;
        display: flex;
        gap: 3rem;
        .active{
          border-bottom: 0.2rem solid black;
        }
        li{
          a{
            text-decoration: none;
            color: #fff;
            text-transform: uppercase;
            font-size: 0.9rem;
            font-weight: 500;
          }
        }
      }
    }

    @media Screen and (min-width:280px) and (max-width: 1080px) {
      margin: 0;
      position: relative;
      .brand__container{
        justify-content: space-between;
        display: flex;
        align-items: center;
        width: 100%;
        .toggle{
          padding-right: 1rem;
          display: block;
          z-index: 1;
        }
      }
       .show{
        opacity: 1 !important;
        visibility: visible !important;
       }
       .links {
         position: absolute;
         overflow-x: hidden;
         top: 0;
         right: 0;
         width:  ${({ state }) => (state ? "100%" : "0%")};
         background-color: black;
         opacity: 0;
         visibility: hidden;
         transition: 0.4s ease-in-out;
         ul{
          flex-direction: column;
          justify-content: center;
          width: 100%;
          text-align: center;
          padding: 50px;
         }
       }
    }
  
  `

export default Navbar