import React from 'react';
import styled from 'styled-components';
import bar from "../assets/Bar.jpg";
import pool from "../assets/pool.jpg";
import spa from "../assets/Spa.jpg";
import Title from './Title';
import { useScroll } from "../components/useScroll";
import { motion } from 'framer-motion';
import { blogAnimation } from "../animation";

function Blog() {
  const [element, controls] = useScroll();
  const blogsData = [
    {
      title: "WEST-TON JOURNAL",
      type: "EXOTIC SPA",
      description:"The West-ton spa is a great place for relaxation and comfort, We created this blog to ensure that our customers get the best and helps you take good care of your skin.",
      image: spa,
    },
    {
      title: "WEST-TON POOL",
      type: "D_POOL",
      description:"The West-ton pool is a great place for fun, We give you the best to ensure that our customers gets satisfied.",
      image: pool,
    },
    {
      title: "WEST-TON BAR",
      type: "OUR_BAR",
      description:"The West-ton bar is a great place for you and your friends to relax while away time, The bar for laughter and enjoyable moments that last forever.", 
      image: bar,
    },
  ];
  return <Section id='blog' ref={element}>

  <Title value ="THE_Blog"/>
  <motion.div className="blogs"
   variants={blogAnimation}
   animate = {controls}
   transition = {{delay : 0.03,
   type: 'tween',
   duration: 0.9,}}
  >
    {blogsData.map(({title, type, description, image}) =>{
      return (
        <div className="blog">
          <div className="image">
            <img src = {image} alt="blogImage" />
          </div>
          <div className="title">
            <h2>{title}</h2>
          </div>
          <span className="type">{type}</span>
          <div className="description">
            <p>
              {description}
            </p>
          </div>
        </div>
      )
    })}
  </motion.div>
  </Section>
}


const Section = styled.section ` 
min-height: 100vh;
color: #fff;
background-color: #000;
margin-top: -2rem;
position: relative;
padding: 5rem 1rem;
.blogs{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  gap: 3rem;
  margin: 5rem 15rem;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 5rem 7rem 5rem 7rem;
  .blog{
    display: flex;
    flex-direction: column;
    .image{
      position: relative;
      img{
        position: relative;
        left: -6rem;
        width: 15rem;
        height: 15rem;
        text-align: center;
        border-radius: 50%;
      }
    }
     .title{
       h2{
          position: relative;
          font-size: 1.2rem;
          left: -6rem;
          font-weight: bold;
          font-style: italic;
          margin: 5px 0;
       }
     }
     .type{
        position: relative;
        left: -6rem;
        font-weight: bolder;
     }
     .description{
       p{
        margin-top: 1rem;
        position: relative;
        left: -6rem;
       }
     }
  }
}

@media Screen and (min-width:280px) and (max-width: 1080px) {
  padding: 7rem 0rem;
  .blogs{
    grid-template-columns: 1fr;
     margin: 3rem 2rem;
     padding: 5rem 9rem;
  }
}
@media (width: 1024px){
  .blogs{
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
     margin: 3rem 8rem;
     padding: 5rem 18rem;
  }
}

@media (width:912px){
  .blogs{
     margin: 3rem 10rem;
     padding: 5rem 16.5rem;
  }
}

@media (width:820px){
  .blogs{
     margin: 3rem 10rem;
     padding: 5rem 14rem;
  }
}

@media (width:768px){
  .blogs{
     margin: 3rem 10rem;
     padding: 5rem 12.5rem;
  }
}
`

export default Blog