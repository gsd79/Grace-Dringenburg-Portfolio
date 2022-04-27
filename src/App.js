import React, { useState } from 'react';
// import Header from './components/Header';
import Nav from './components/Nav';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {name: 'About Me'},
    {name: 'Portfolio'}, //projects
    {name: 'Resume'}, //about me
    {name: 'Contact'}, 
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      {/* <Header> */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      {/* </Header> */}
      <main>
        {/* <Projects currentCategory={currentCategory}></Projects>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
         */}
      </main>
    </div>
  );
}

export default App;
