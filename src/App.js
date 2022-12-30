import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Package from './components/Package';
import CustomerReview from './components/CustomerReviews.js';
import ClietStory from './components/ClienStory.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <About/>
        <Features/>
        <Portfolio/>
        <Package/>
        <CustomerReview/>
        <ClietStory/>
        <Contact/>
        <Footer/>
      </>
  );
}

export default App;
