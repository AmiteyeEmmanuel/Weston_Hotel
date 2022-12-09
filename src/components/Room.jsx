import React from 'react';
import styled from 'styled-components';
import room2 from  "../assets/Room2.jpg";
import room3 from  "../assets/Room3.jpg";
import room4 from  "../assets/Room4.jpg";
import room5 from  "../assets/Room5.jpg";
import room6 from  "../assets/Room6.jpg";
import room7 from  "../assets/Room7.jpg";
import room8 from  "../assets/Room8.jpg";
import room9 from  "../assets/Room9.jpg";
import { useScroll } from "../components/useScroll";
import { motion } from 'framer-motion';

function Room() {
  const [element, controls] = useScroll();
  return(
  <Section id='room' ref={element}>
    <div className="grid">
      <motion.div className="child-one grid-box"> </motion.div>
      <motion.div className="child-two grid-box"> </motion.div>
      <motion.div className="child-three grid-box"> </motion.div>
      <motion.div className="child-four grid-box"> </motion.div>
      <motion.div className="child-five grid-box"> </motion.div>
      <motion.div className="child-six grid-box"> </motion.div>
      <motion.div className="child-seven grid-box"> </motion.div>
      <motion.div className="child-eight grid-box"> </motion.div>
    </div>
  </Section> 
  );
}



const Section = styled.section `
 min-height: 100vh;
 padding-bottom:2rem;
 overflow: hidden;
 .grid{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 
  "one one two two" 
  "one one three four"  
  "five six seven seven"
  "eight six seven seven";
  .grid-box{
    height: 15rem;
    cursor: pointer;
    width: 100%;
    &:nth-of-type(1){
      grid-area: one;
      background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${room2}) no-repeat right center;
      background-size: cover;
      height: 100%;
      z-index: 10;
      transition: transform .2s;
      &:hover{
        transform: scale(1.1);
      }
    }
    &:nth-of-type(2){
      grid-area: two;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${room3}) no-repeat center center;
      background-size: cover;
      z-index: 10;
      transition: transform .2s;
      &:hover{
        transform: scale(1.1);
      }
    }
    &:nth-of-type(3){
      grid-area: three;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${room4}) no-repeat right center;
      background-size: cover;
      transition: transform .2s;
      &:hover{
        transform: scale(1.1);
      }
    }
    &:nth-of-type(4){
      z-index: 10;
      grid-area: four;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${room5}) no-repeat right center;
      background-size: cover;
      transition: transform .2s;
      &:hover{
        transform: scale(1.1);
      }
    }
    &:nth-of-type(5){
      grid-area: five;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${room6}) no-repeat right center;
      background-size: cover;
      transition: transform .2s;
      &:hover{
        transform: scale(1.1);
      }
    }
    &:nth-of-type(6){
      grid-area: six;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${room7}) no-repeat right center;
      background-size: cover;
      transition: transform .2s;
      &:hover{
        transform: scale(1.1);
      }
    }
    &:nth-of-type(7){
      grid-area: seven;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${room8}) no-repeat right center;
      background-size: cover;
      transition: transform .2s;
      &:hover{
        transform: scale(1.1);
      }
    }
    &:nth-of-type(8){
      grid-area: eight;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${room9}) no-repeat right center;
      background-size: cover;
      z-index: 10;
      transition: transform .2s;
      &:hover{
        transform: scale(1.1);
      }
    }
  }
 }

 @media Screen and (min-width:280px) and (max-width: 1080px) {
  .grid{
    padding: 0;
    grid-template-columns: 1fr;
    grid-template-areas:
    "one"
    "two"
    "three"
    "four"
    "five"
    "six"
    "seven"
    "eight";
    .grid-box{
      height: 25rem !important;
    }
  }
 }
`;

export default Room