import React from 'react';
import styled from 'styled-components';
import home from    "../assets/home.png";
import Navbar from './Navbar';
import {motion} from "framer-motion";
import { homeAnimation, homeInfoAnimation  } from "../animation";

function Home() {
  return (
    <Section id = "home">
      <Navbar/>
      <motion.div className="home"
       variants = {homeAnimation}
      transition = {{ delay: 0.3, duration: 0.6, type:"tween"}}
      >

      <div className="content">
        <div className="title">
          <h1> THE WEST-TON HOTEL </h1>
          <h2> A place to relax and enjoy the outdoors.</h2>
          <div className="subtitle">
          <p>  
             The West-ton Hotel is a family-friendly hotel located in the heart of the city of lagos.
              it is a 5-star hotel with a variety of rooms and suites.
              A great place to relax and enjoy the outdoors.
              We offer a variety of services and facilities to make your stay a comfortable one.
          </p>
          </div> 
          </div>    
      </div>

      </motion.div>

      <motion.div className="info"
       variants = {homeInfoAnimation}
       transition = {{ delay: 0.2, duration: 0.9, type:"tween"}}>
        <div className="grid">
          <div className="col">
            <strong> Email</strong>
            <p>West-ton@email.com</p>
          </div>
          <div className="col">
            <strong> Mobile</strong>
            <p>  +234(70-8330-2397)</p>
          </div>
          <div className="col">
            <strong> Address</strong>
            <p> Ikeja, Adeniyi Jones</p>
          </div>
          <div className="col">
            <strong> Our Services</strong>
            <p> Comfort</p>
            <p> Luxury</p>
            <p> Relaxation</p>
            <p> Spacious</p>
          </div>
          <div className="col">
            <strong> Opening Days</strong>
            <p> Monday - Sunday</p>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

const Section = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${home}) no-repeat;
  min-height: 90vh;
  background-size: cover;
  position: relative;
  .home{
    height: 100%;
  }
  .content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    color: #fff;
    gap: 1.3rem;
    margin-top: 5rem;
    padding-left: 20rem;
    .title{
      h1{
        font-size: 2.5rem;
        line-height: 3.3rem;
        text-align: center;
      }
      h2{
        font-size: 1.5rem;
        font-style: italic;
        text-align: center;
        margin-bottom: 0.5rem;
      }
      .subtitle{
        p{
          text-align: center;
          line-height:1.5rem;
          font-style: 1.3rem;
          font-size: 1.2rem;
        }
      }
    }
  }

  .info{
    position: absolute;
    bottom: -5rem;
    right: 0;
    background-color: var(--Tertiary-color);
    padding: 3rem;
    margin-right: 0.5rem;
    .grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      color: #000;
    }
  }

  @media Screen and (min-width:280px) and (max-width: 1080px) {
    .home{
      .content{
        padding-left: 1.2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title{
          h1{
            font-size: 2rem;
          }
          p{
            font-size: 1rem;
          }
        }
      }
    }
    .info{
      position: initial;
      margin-bottom: 2rem;
      margin-left: 0.3rem;
      .grid{
        grid-template-columns: 1fr;
      }
    }
  }

  @media (width: 912px), (width:1024px) {
    min-height: 55vh;
    .home{
      .content{
        padding-left: 13rem;
        width: 80%;
        margin-bottom: 2rem;
        .title{
          h1{
            font-size: 2rem;
          }
          p{
            font-size: 1rem;
          }
        }
      }
    }
    .info{
      position: relative;
      bottom: -4rem;
      .grid{
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
  @media (width: 768px),(width: 820px) {
    min-height: 50vh;
    .home{
      .content{
        padding-left: 5rem;
        width: 90%;
        margin-bottom: 2rem;
        .title{
          h1{
            font-size: 2rem;
          }
          p{
            font-size: 1rem;
          }
        }
      }
    }
    .info{
      position: relative;
      bottom: -1rem;
      .grid{
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;
export default Home