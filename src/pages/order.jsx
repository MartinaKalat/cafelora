import {render} from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import '../components/Header.jsx'
import '../components/Footer.jsx'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"
import Order  from "../components/Order.jsx"


const loadPage =  async () =>  {
    const response = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image')
    const data = await response.json();
    const items = data.data;

    document.querySelector('#root').innerHTML = render(
        <div className="page">
            <Header showMenu={false} />
            <main>
                <Order items={items} />
            </main>
            <Footer />
        </div>
    );
};

loadPage();