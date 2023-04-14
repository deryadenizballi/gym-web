import { useEffect } from "react";
import Aos from "aos";

import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Exercises from "./components/UI/Exercises";
import Start from "./components/UI/Start";
import Pricing from "./components/UI/Pricing";
import Testimonials from "./components/UI/Testimonials";
import Footer from "./components/UI/Footer";

function App() {

  useEffect(()=>{
    Aos.init();
  },[])
  return <>
          <Header/>
          <Hero/>
          <Exercises/>
          <Testimonials/>
          <Start/>
          <Pricing/>
          <Footer/>
         </>
}

export default App;
