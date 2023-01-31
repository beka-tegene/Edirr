import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from "../components/Hero/Hero";
import HightLight from "../components/HightLight/HightLight";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import Join from "../components/Join/Join";
import Contact from "../components/contactUs/Contact";
import Footer from "../components/Footer/Footer";
const Landing = () => {
  return (
    <Layout>
      <Hero />
      <HightLight />
      <About />
      <Service />
      <Join />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default Landing