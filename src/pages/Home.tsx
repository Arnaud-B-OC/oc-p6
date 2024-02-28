import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface LogementData {
    cover: string
    description: string
    equipments: string[]
    host: {
        name: string
        picture: string
    }
    id: string
    location: string
    pictures: string[]
    rating: number
    tags: string[]
    title: string
}

function Home() {
    const [logements, setLogements] = useState<LogementData[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/api/logements.json').then((data) => data.json()).then((json) => {

            console.log(json)

            setLogements(json)
        });
	}, [])

    return <>
        <Header/>

        <main className='home'>
            <div className='homeImage'>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            <section className='logements'>
                {logements.map((logement) => {
                    return <Link to={`/logements/${logement.id}`}>
                        <article key={logement.id}>
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
