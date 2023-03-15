import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Project from "./components/projects/project";
import Nav from "./components/nav/nav";
import Experience from "./components/experience/experience";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Nav />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
