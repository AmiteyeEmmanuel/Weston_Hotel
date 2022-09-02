import Home from './components/Home';
import Services from './components/Services';
import Room from './components/Room';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import ScrollToUp from './components/ScrollToUp';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Entertainment from './components/Entertainment';
import { motion } from 'framer-motion';
import React from 'react';


function App() {
    return (
        <motion.div initial= "hidden" animate = "show">
        <Home/>
        <Services/>
        <Room/>
        <Blog/>
        <Pricing/>
        <Testimonials/>
        <Entertainment/>
        <Contact/>
        <Footer/>
        <ScrollToUp/>
        </motion.div>
    )
}

export default App