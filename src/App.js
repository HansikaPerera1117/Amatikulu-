
import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import Destinations from './components/destinations/Destinations';
import Offers from './components/offers/Offers';
import Categories from './components/categories/Categories';
import NewsLetter from './components/newsLetter/NewsLetter';
import Footer from './components/footer/Footer';

import { useEffect } from "react"



function App() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    // window.scrollTo(0, 0)
  }, []);
  
  return (
    <div className="App">
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;700&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <header>
           <NavBar/>
        </header>
        <main>
          <Home/>
          <Destinations/>
          <Offers/>
          <Categories/>
          <NewsLetter/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </div>
  );
}

export default App;
