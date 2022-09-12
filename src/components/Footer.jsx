import React from 'react';
import styled from 'styled-components';
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsLinkedin,} from 'react-icons/bs'; 
import { useScroll } from "../components/useScroll";
import { motion } from 'framer-motion';
import { footerAnimation } from "../animation";
function Footer() {
const [element, controls] = useScroll();
  return (
    <Foot ref={element}>
      <motion.span
          variants = {footerAnimation}
          animate = {controls}
          transition = {{
            delay: 0.02,
            type: "just",
            duration: 0.9
          }}
      >
        &copy; 2022 Amiteye Emmanuel, All Rights Reserved.
      </motion.span>
      <motion.div className="footer__social__icons"
          variants = {footerAnimation}
          animate = {controls}
          transition = {{
            delay: 0.02,
            type: "just",
            duration: 0.9
          }}
      >
        <BsFacebook/>
        <BsInstagram />
        <BsLinkedin />
        <BsTwitter />
        <BsYoutube/>
      </motion.div>
    </Foot>
  )
}

const Foot = styled.footer`
background-color: var(--Secondary-color);
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
.footer__social__icons{
  display: flex;
  gap: 1rem;
  svg{
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
     &:hover{
      &:nth-child(1){
        color: #3b5998;
      }
      &:nth-child(2){
        color: #e4405f;
      }
      &:nth-child(3){
        color: #00acee;
      }
      &:nth-child(4){
        color: #1da1f2;
      }
      &:nth-child(5){
        color: #ff0000;
      }
     } 
  }
}

@media screen and (min-width:280px) and (max-width:1080px) {
  padding: 1rem;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
}
`
export default Footer