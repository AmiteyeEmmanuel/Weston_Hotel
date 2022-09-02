import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';


function ScrollToUp() {
  const [showScroll, setShowScroll] = useState(false);
  window.addEventListener('scroll', () => {
    window.pageYOffset > 100 ? setShowScroll(true) : setShowScroll(false);
  })
  return (
    <Div>
      <a href="#" className={`${showScroll ?  "block" : "none"}`} >
        <FaChevronUp/>
      </a>
    </Div>
  )
}

const Div = styled.div`
max-width: 100vw;
.none{
  opacity: none;
  visibility:hidden;
}
a{
  position: fixed;
  bottom: 10px;
  right: 40px;
  background-color:#fff;
  padding: 0.5rem;
  border-radius: 30%;
  display:flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: 0.5s ease-in-out;
  svg{
    color: #000;
    font-size: 0.8rem;
  }
}
`
export default ScrollToUp