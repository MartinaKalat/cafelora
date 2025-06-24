import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import Header from "../components/Header.jsx"
import Banner from "../components/Banner.jsx"
import Menu from "../components/Menu.jsx"
import Gallery from "../components/Gallery.jsx"
import Contact from "../components/Contact.jsx"
import Footer from "../components/Footer.jsx"


document.querySelector('#root').innerHTML = render(
  <div className="page">
   <Header />
    <main>
     <Banner />
      <Menu />
<Gallery />
      <Contact />
      <Footer />
    </main>
  </div>
);
