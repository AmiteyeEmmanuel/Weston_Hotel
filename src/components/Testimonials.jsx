import React, { useState } from 'react';
import styled from 'styled-components';
import { useScroll } from "../components/useScroll";
import { motion } from 'framer-motion';
import { testAnimation } from "../animation";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const [element, controls] = useScroll();
  const testimonial = [
    {
      name: 'John Doe',
      designation: 'Luxury Room',
      review: 'My stay was amazing. The staff was very helpful and the location was perfect for me.',
    },
    {
      name: 'Michael Adams',
      designation: 'Super Deluxe Room',
      review: 'I was satisfied with the experience and comfort of the hotel. Would definitely stay here again.',
    },
    {
      name: 'Jane Davis',
      designation: 'Deluxe Room',
      review: 'The West-ton was a perfect place to stay and relax. The spa service was amazing and the wifi connection was fast and satisfying.',
    },
    {
      name: 'Emmanuel Amiteye',
      designation: 'Standard Room',
      review: 'The Room was spacious and very comfortable, You can get all the comfort you need from west-ton hotel.'
    },
    {
      name: 'Chris David',
      designation: 'Super Deluxe Room',
      review: 'I enjoy my stay, the view were amazing, food and services was superb, the staffs were very friendly and helpful.'
    },
    {
      name: 'Victor Adebola',
      designation: 'Deluxe Room',
      review: 'The hotel service was superb and enjoyable, believe me, i never wanted to go back home after staying in this amazing suite.'
    }
  ];
  return (
    <Section ref={element}>
      <div className="container">
        <motion.div className= "testimonials"
        variants={testAnimation}
        animate= {controls}
        transition = {{ delay: 0.02, 
        type: "tween",
        duration : 0.9,
      }}
        >
          {
            testimonial.map(({ name, designation, review}, index)=> {
              return(
                <div className={`testimonial ${selected === index ? 'active' : 'hidden' }`} key ={index}>
                  <div className="title-container">
                    <h4 className='name'>
                      {name}
                    </h4>
                    <span className='designation'>
                      {designation}
                    </span>
                    <p className='description'>
                      {review}
                    </p>
                  </div>
                </div> 

              );
            })
          }
        </motion.div>

        <motion.div className='controls'
            variants={testAnimation}
            animate= {controls}
            transition = {{ delay: 0.02, 
            type: "tween",
            duration : 0.9,
          }}
        >
          <button className = {selected === 0 ? 'active' : ''}
           onClick= {() => {
            setSelected (0);
          }}> </button>

               <button className = {selected === 1 ? 'active' : ''}
           onClick= {() => {
            setSelected (1);
          }}> </button>

               <button className = {selected === 2 ? 'active' : ''}
           onClick= {() => {
            setSelected (2);
          }}> </button>

              <button className = {selected === 3 ? 'active' : ''}
           onClick= {() => {
            setSelected (3);
          }}> </button>

          <button className = {selected === 4 ? 'active' : ''}
           onClick= {() => {
            setSelected (4);
          }}> </button>

          <button className = {selected === 5 ? 'active' : ''}
           onClick= {() => {
            setSelected (5);
          }}> </button>

        </motion.div>
      </div>
    </Section>
  )
}

const Section = styled.section `
height: 60vh;
overflow: hidden;
.container {
  display: flex;
  background: #000;
  flex-direction: column;
  min-height: 60vh;
  justify-content: center;
  align-items:center;
  gap: 2rem;
  border-top: 1px solid #fff;
  align-items: center;
  .testimonials{
    display: flex;
    align-items: center;
    gap: 1rem;
    text-align: center;
    justify-content: center;
    width: 50%;
    .testimonial{
      display: flex;
      flex-direction: column;
      align-items:center;
      gap: 1rem;     
    }
    .hidden{
      display: none;
    }
    color: #000;
    .title-container{
      background-color: var(--primary-color);
      padding: 5rem;
      border: 3px solid #000;
      border-radius: 20%;
      h4{
        font-size: 1.5rem;
        text-transform: Uppercase;
        font-style: italic;
        font-family: 'Poppins', cursive;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
    }
  }
  .controls{
    display: flex;
    gap: 1rem;
    button{
      padding: 0.5rem;
      border-radius: 2rem;
      background-color: #fff;
      border: 0.1rem solid transparent;
      cursor: pointer;
    }
    .active{
      background-color: transparent;
      border: 0.1rem solid #fff;
    }
  }
}



@media Screen and (min-width:280px) and (max-width: 1080px) {
  .container{
    padding: 2rem 0;
    .testimonials{
      width: 80%;
      margin-top: -3rem;
      .title-container{
        padding: 2rem;
      }
    }
  }
}
`

export default Testimonials