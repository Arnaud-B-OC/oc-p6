import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import { LogementData } from '../../interfaces';
import Banner from '../../components/banner/Banner';

function Home() {
    const [logements, setLogements] = useState<LogementData[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/logements.json').then((data) => data.json()).then((json) => setLogements(json));
	}, []);

    return <>
        <Header/>

        <main className='home'>
            <Banner title='Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs' image='/assets/images/img1.png'/>

            <section className='logements'>
                {logements.map((logement) => {
                    return <Link to={`/logements/${logement.id}`} key={logement.id}>
                        <article>
                            <img src={logement.cover} alt={logement.title}/>
                            <h2>{logement.title}</h2>
                        </article>
                    </Link>
                })}
            </section>
        </main>

        <Footer/>
    </>
}

export default Home
