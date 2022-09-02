import React, { Fragment } from 'react';
import styled from "styled-components";
import book from "../assets/Book.jpg";
import { useScroll } from "../components/useScroll";
import { motion } from 'framer-motion';
import { pricingAnimation } from "../animation";


function Pricing() {
  const [element, controls] = useScroll();
  const price = [
    {
      name: "Standard",
      price: "₦150,000",
    },
    {
      name: "Deluxe",
      price: "₦200,000",
    },
    {
      name: "Super Deluxe",
      price: "₦250,000",
    },
    {
      name: "Luxury",
      price: "₦300,000",
    },
    {
      name: "Royal",
      price: "₦350,000",
    },
  ];

  const data = [
    {
      value: "Standard Room",
      type: "Standard",
  },
  {
     value: "Comfortable bed",
     type: "Standard",
  },
  {
    value: "Free Wi-Fi",
    type: "Standard",
  },
  {
    value: "Standard Breakfast included",
    type: "Standard",
  },
  {
    value: "Deluxe Room",
    type: "Deluxe",
  },
  {
    value: "Deluxe Comfortable bed",
    type: "Deluxe",
  },
  {
    value: "Wi-Fi",
    type: "Deluxe",
  },
  {
    value: "Deluxe Breakfast included",
    type: "Deluxe",
  },
  {
    value: "Super Deluxe Room",
    type: "Super Deluxe",
  },
  {
    value: "Amazing bed with massage service",
    type: "Super Deluxe",
  },
  {
    value: "Wi-Fi and Private Pool Access",
    type: "Super Deluxe",
  },
  {
    value: "Luxury And The Luxury Breakfast, lunch and dinner included",
    type: "Luxury",
  },
  {
    value:"Luxury, Exotic and Comfortable bed",
    type: "Luxury",
  },
  {
    value: "Wi-Fi, Private Spa and Private Pool Access",
    type: "Luxury",
  },
  {
    value: "The Royalty bed",
    type: "Royal",
  },
  {
    value: "The Royalty Breakfast, lunch and dinner included with special complimentary services",
    type: "Royal",
  },
  {
    value: "Private Wi-Fi, Royalty Private Spa, Private Pool Access",
    type: "Royal",
  },
];

  return (
    <Section ref={element}>

      <div className="title">
        <h1> Hotel Reservation and Bookings </h1>
      </div>
      <div className="pricing__title">
        <h2>
          Choose your room type and plan.
          <p>
            Our hotel price is based on your taste and budget.
          </p>
        </h2>
      </div>
      <motion.div className="pricing__container"
      variants={pricingAnimation}
      animate={controls}
      transition ={{ delay : 0.03,
      type: "just",
      duration: 0.9,
      }}
      >
        {price.map(({name, price}, index) => {
          return (
            <div className="pricing__item" key={index}>
               <div className="pricing__item__title">
                <h2>{name}</h2>
                <div className="pricing__plan__name__price">
                  <h2>{price}</h2>
                </div>
               </div>
                <div className="pricing__item__description">
                  <ul className={`pricing__plan__content__features ${name}`}>
                    {data.map(({value, type}, index2) => {
                      return (
                        <Fragment key={index2}>
                          {name === "Standard" ? (
                            type === name ? (
                              <li> {value}</li>
                            ) : (
                              <li className="line"> {value} </li>
                            )
                          ) : name === "Deluxe" ? (
                             type === "Standard" || type === name ? (
                              <li>{value}</li>
                            ) : (
                              <li className="line">{value}</li>
                            )
                          ) : name === "Super Deluxe" ? (
                            type === "Standard" || type === "Deluxe" || type === name  ? (
                              <li>{value}</li>
                            ) : (
                              <li className="line">{value}</li>
                            )
                          ) : name === "Luxury" ? (
                            type === "Standard" || type === "Deluxe" || type === "Super Deluxe" || type === name ? (
                              <li>{value}</li>
                            ) : (
                              <li className="line">{value}</li>
                            )
                          ) : name === "Royal" && <li>{value}</li>}
                        </Fragment>
                      )
                    })}
                  </ul>
                <div className="pricing__plan__content__book">
                  <span>
                    Book Now
                  </span>
                  <img src={book} alt="" />
                </div>
                </div>
            </div>
          )
        })}
      </motion.div>
    </Section>
  )
}
const Section = styled.section `
min-height: 100vh;
padding: 5rem;
position: relative;
color: #fff;
background: #000;
border-top: 2px solid #fff;
.title {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--Secondary-color);
  font-size: 1.7rem;
  text-transform: UpperCase;
  font-weight: bold;
}
.pricing__title {
  text-align: center;
  margin-bottom: 2rem;
  text-transform: Uppercase;
  font-family: 'Montserrat', sans-serif;
  font-style: italic;
  letter-spacing: 2px;
  h2{
    font-size: 1.2rem;
  }
}
.pricing__container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 1rem;
  gap: 1rem;
  padding: 0 5rem;
  .pricing__item{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    &:nth-of-type(5){
      grid-column: span 2;
    }
  }
  .pricing__item__title{
    background: var(--Secondary-color);
    border-radius: 1.8rem;
    justify-content: center;
    width: 15rem;
    height: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
      font-size: 1.3rem;
      font-style: italic;
    }
  }
  .pricing__item__description{
    .pricing__plan__content__features{
      list-style-type: none;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      border-left: 2px solid #fff;
      border-right: 2px solid #fff;
      padding: 2rem;
      .line{
        text-decoration: line-through;
      }
    }
  }
  .pricing__plan__content__book{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    img{
      width: 7rem;
      height: 3rem;
      border-radius: 25%;
    }
  }
}

@media Screen and (min-width:280px) and (max-width:1080px) {
  padding: 1rem;
  .title {
    font-size: 1.2rem;
    text-transform: UpperCase;
    font-weight: bold;
  }
  .pricing__title {
    h2{
      font-size: 0.7rem;
    }
  }
  .pricing__container{
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding:1rem; 
  }
}


@media (width:768px), (width:820px), (width:912px), (width:1024),(width:1080px) {
  .pricing__container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
    gap: 1rem;
    padding: 0 0.5rem;
   
  }
}
`
export default Pricing