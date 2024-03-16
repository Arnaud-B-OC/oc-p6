import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useEffect, useState } from 'react';
import './home.scss';
import { LogementData } from '../../interfaces';
import Banner from '../../components/banner/Banner';
import LogementCard from '../../components/logementCard/LogementCard';
import Loading from '../loading/Loading';

function Home() {
    const [logements, setLogements] = useState<LogementData[] | undefined>(undefined);

    useEffect(() => {
        fetch('http://localhost:3000/api/logements.json').then((data) => data.json()).then((json) => setLogements(json));
	}, []);

    return <>
        <Header/>

        {logements && <main className='home'>
            <Banner title='Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs' image='/assets/images/img1.png'/>

            <section className='logements'>
                {logements.map((logement) => <LogementCard key={logement.id} id={logement.id} cover={logement.cover} title={logement.title} />)}
            </section>
        </main>}

        {!logements && <Loading/>}

        <Footer/>
    </>
}

export default Home
