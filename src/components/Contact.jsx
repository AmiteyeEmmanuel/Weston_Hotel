import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import { useScroll } from "../components/useScroll";
import { motion } from 'framer-motion';
import { contactAnimation } from "../animation";


function Contact() {
const [element, controls] = useScroll();
  return (
    <Section ref={element}> 
      <Title value= "Contact"/>
      <motion.div className="contact"
      variants={contactAnimation}
      animate = {controls}
      transition ={{
        delay: 0.02,
        type: "just",
        duration: 0.9
      }}
      >
        <div className="contact__title">
          <h2> CONTACT-US</h2>
          <p> 
            We are always open to hear from you.
          </p>
        </div>
        <div className="contact__data">
          <div className="contact__data__item">
            <h2>
              Visit us today
            </h2>
            <p>
              West-ton Hotel is ready to serve you.
            </p>
            <p>
              <span> Address:</span> 3, ikeja, lagos
            </p>
            <p>
              <span> Phone:</span> +234-915-747-5764
            </p>
            <p>
              <span> Email:</span> Emmanuelamiteye5@gmail.com
            </p>
          </div>
          <div className="contact__data__form">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
              <textarea name="" id="" cols="30" rows="10" placeholder="Type your Message here"></textarea>
              <button type="submit"> Send</button>
            
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

const Section = styled.section`
min-height: 100vh;
background: #000;
color: #fff;
margin-top: -9rem;
padding: 10rem 0;
.contact{
  margin: 0 18rem;
  &__title{
    margin: 6rem 0 2rem 0;
    h2{
      font-size: 2rem;
      font-weight: bold;
      font-style: italic;
      align-items: center;
      text-align: center;
      color: var(--Secondary-color);
    }
    p{
      font-size: 1.2rem;
      text-transform: Uppercase;
      font-style: italic;
      align-items: center;
      text-align: center;
    }
  }
  &__data{
    display: grid;
    grid-template-columns: 1fr 1.2fr;
     gap: 3rem;
     &__item{
      display: flex;
      flex-direction: column;
      h2{
        font-size: 1.0rem;
        text-transform: Uppercase;
        font-style: italic;
        gap: 1.2rem;
      }
      p{
        font-size: 1.0rem;
        margin-top: 1rem;
        text-align: justify;
      }
     }
     &__form{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      input{
        display: flex;
        flex-direction: column;
        border-bottom: 0.1rem solid #fff;
        align-items: center;
        width: 100%;
        height: 10%;
        text-transform: uppercase;
        background: #000;
        color: #fff;
        border-box: none;
      }
      textarea{
        display: flex;
        flex-direction: column;
        border-bottom: 0.1rem solid var(--Secondary-color);
        align-items: center;
        width: 100%;
        text-transform: uppercase;
        background: #000;
        color: #fff;
        resize: none;
      }
      button{
        background-color: var(--Secondary-color);
        width: 100%;
        border: 0.1rem solid var(--Secondary-color);
        height: 3rem;
        border-radius: 15%;
        cursor: pointer;
        text-transform: uppercase;
        transition: 0.5s ease-in-out;
        &:hover{
          background-color:#fff;
        }
      }
    }
  }
} 
@media (width:820px), (width: 912px) {
  min-height:50vh;
}

@media screen and (min-width:280px) and (max-width:1080px) {
  margin-top: -5rem;
  .contact{
    margin: 1rem;
    padding: 0 1rem;
    &__title {
      margin: 0;
      text-align: center;
      p {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
      h2{
        font-size: 1.5rem;
      }
    }

    &__data {
      grid-template-columns: 1fr;
      margin: 0;
      p {
        text-align: left;
      }
    }
    &__form {
      button {
        height: 7rem;
      } 
    }
  }
}

`

export default Contact