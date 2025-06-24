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


const navBtn = document.querySelector('.nav-btn');
const rolloutNav = document.querySelector('.rollout-nav');

navBtn.addEventListener('click', () => {
    rolloutNav.classList.toggle('nav-closed');
});

rolloutNav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        rolloutNav.classList.add('nav-closed');
    }
});
