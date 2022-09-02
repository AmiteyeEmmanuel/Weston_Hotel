import React from 'react';
import styled from 'styled-components';
import services1 from    "../assets/Services1.jpg";
import services2 from    "../assets/Services2.jpg";
import services3 from    "../assets/Services3.jpg";
import Title from './Title';
import { useScroll } from "../components/useScroll";
import { motion } from 'framer-motion';
import { serviceAnimation } from "../animation";

function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: 'Delicacy',
      description: 'West-ton Hotel give you the best taste of food and dessert and offers you a varieties of food beyond your expectations.',
      image: services1,
    },
    {
      type: 'Room Service',
      description: 'We offer good quality room service and a variety of drinks to keep you happy, healthy and make your stay a comfortable one.',
      image: services2,
    },
    {
      type: '247 Wifi Connectivity',
      description: 'You dont have to worry or complain about poor network, we offer the best wifi connectivity.',
      image: services3,
    },
  ];

   

   return <Section id="services" ref={element}>
    <Title value= "services"/> 
  <div className="services">
    {
      data.map(({type,description,image}, index) => {
        return (
          <motion.div className="services__service"
           variants={serviceAnimation}
           animate = {controls}
           transition = {{delay : 0.03,
           type: 'tween',
           duration: 0.9,
          }}          
           > 
             <div className="services__service__image">
                <img src={image} alt="Service" />
             </div>
             <div className="services__service__title">
              <span>0{index + 1 }</span>
              <h2>{type}</h2>
             </div>
             <p className="services__service__description">
              {description}
             </p>
          </motion.div>
        )
      })
    }
  </div>
   </Section>
}

const Section = styled.section `
min-height: 100vh;
background: #000;
margin-top: -9rem;
padding: 8rem 0;
.services {
 display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items:center;
  height:100%;
  margin: 10rem 12rem 0 12rem;
  gap: 1rem;
  &__service{
    padding: 2rem 4rem;
    background-color: var(--Tertiary-color);
     transition: transform .2s;
      &:hover{
        transform: scale(1.1);
      }
    &:nth-of-type(2){
      background-color: var(--primary-color);
      transition: transform .2s;
      &:hover{
        transform: scale(1.1);
      }
      .services__service__title{
        span{
          text-align: center;
          font-size: 2rem;
          font-style: italic;
          padding-left: 10rem;
          color: #000;
        }
        h2{
          text-align: center;
          text-transform: Uppercase;
          font-style: italic;
          color: #000;
        }
      }
      .services__service__description{
        color: #000;
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
      }
    }
    .services__service__title{
      span{
        text-align: center;
        font-size: 2rem;
        font-style: italic;
        padding-left: 10rem;
        color: #000;
      }
      h2{
        text-align: center;
        text-transform: Uppercase;
        font-style: italic;
        color: #000;
      }
    }
    .services__service__description{
      color: #000;
      font-size: 1rem;
      text-align: center;
    }
    .services__service__image{
      margin-left: 1.5rem;
      img{
        width: 200px;
        height: 200px;
        text-align: center;
      }
    }
  }
}

@media Screen and (min-width:280px) and (max-width: 1080px) {
  padding: 14rem 0 2rem 0;
  .services{
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0;
    margin: 0 0;
    .services__service{
      width: 80%;
      margin:0 23px; 
      padding: 2rem 2.4rem;
      align-items: center;
      .services__service__image{
        padding: 0;
        margin: 0;
        img{
          width: 230px;
          height: 200px;
          text-align: center;
          justify-content: center;
          margin-right: 2px;
        }
      }
      .services__service__description{
        font-size: 0.8rem;
      }
      .services__service__title{
        h2{
          font-size: 1.2rem;
        }
        span{
          text-align: center;
          font-size: 1.2rem;
        }
      }
    }
  }
}

@media (width: 1024px) {
  padding: 19rem 0 2rem 0;
  .services{
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1px;
    .services__service{
      .services__service__image{
        margin:0 -10px;
        img{
          width: 200px;
          height: 200px;
        }
      }
    }

  }
}

@media (width: 912px) {
  padding: 16rem 0 2rem 0;
  .services{
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 2rem;
    padding: 0;
    margin: 0 0;
    .services__service{
      width: 60%;
      margin:0 180px; 
      .services__service__image{
        margin:0 120px;
        img{
          width: 250px;
          height: 200px;
        }
      }
      .services__service__description{
        font-size: 0.8rem;
      }
      .services__service__title{
        span{
          padding-left: 18rem;  
          text-align: center;
          font-size: 1.2rem;
        }
      }
    }
  }
}

@media (width:820px), (width:768px) {
  padding: 15rem 0 2rem 0;
  .services{
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 2rem;
    padding: 0;
    margin: 0 0;
    .services__service{
      width: 60%;
      margin:0 150px; 
      .services__service__image{
        margin:0 70px;
        img{
          width: 250px;
          height: 200px;
        }
      }
      .services__service__description{
        font-size: 0.8rem;
      }
      .services__service__title{
        span{
          padding-left: 18rem;  
          text-align: center;
          font-size: 1.2rem;
        }
      }
    }
  }

}
`
;
export default Services


