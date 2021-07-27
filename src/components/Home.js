import React from 'react';
import Navigation from 'components/Navigation';
import Footer from "components/Footer";
import Introduction from 'components/Introduction'; 
import Bio from 'components/Bio';
import History from 'components/History';
import Technologies from 'components/Technologies';
import Contact from 'components/Contact';
import 'styles/Home.css';

function Home() {
  return (
    <div>
      <Navigation/>
      <Introduction/>
      <Bio/>
      <History/>
      <Technologies/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;