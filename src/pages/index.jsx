import {render} from '@czechitas/render';
import '../global.css';
import './index.css';
import Header from "../components/Header.jsx"
import Banner from "../components/Banner.jsx"
import Menu from "../components/Menu.jsx"
import Gallery from "../components/Gallery.jsx"
import Contact from "../components/Contact.jsx"
import Footer from "../components/Footer.jsx"

const loadPage = async () => {
    const url = 'http://localhost:4000/api/drinks';
    const response = await fetch(url);
    const data = await response.json();
    const drinks = data.data;


    document.querySelector('#root').innerHTML = render(
        <div className="page">
            <Header/>
            <main>
                <Banner/>
                <Menu drinks={drinks}/>
                <Gallery/>
                <Contact/>
                <Footer/>
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


    const forms = document.querySelectorAll('.drink__controls')
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const id = form.dataset.id;
            // console.log("Chci si objendat napoj s id", id)
            const button = document.querySelector('button');
            const order = form.dataset.ordered === 'true';


            const patch = [{op: 'replace', path: '/ordered', value: !order}];

            try {
                const response = await fetch(`http://localhost:4000/api/drinks/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(patch)
                });
                if (response.ok) {
                    console.log(response);
                } else {
                    throw new Error(`Error parsing drink ${id}`)
                }
                const result = await response.json()
                console.log(result);
                window.location.reload()
            } catch (error) {
                console.log(error)
            }
        })
    })
}

        loadPage();
