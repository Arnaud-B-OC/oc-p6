import { useEffect, useState } from 'react'
import Dropdown from '../../components/dropdown/Dropdown'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Host from '../../components/host/Host'
import Rating from '../../components/rating/Rating'
import Tag from '../../components/tag/Tag'
import { LogementData } from '../../interfaces'
import { useParams } from 'react-router-dom'
import Carrousel from '../../components/carrousel/Carrousel'
import './logement.scss'
import ErrorPage404 from '../error/ErrorPage404'
import Loading from '../loading/Loading'
import { request } from '../../request'

function Logement() {
    const params = useParams();

    const [logement, setLogement] = useState<LogementData | undefined | null>(null);

    useEffect(() => {
        request('/api/logements.json').then((result) => {
            let logement : LogementData | undefined = result.find((logement : LogementData) => logement.id === params.id);
            setLogement(logement);
        })
	}, [params.id]);

    return <>
        {logement === null && <>
            <Header/>
            <Loading/>
            <Footer/>
        </>}
        {logement && <>
            <Header/>

            <main>
                <Carrousel images={logement.pictures}/>
                
                <section className='logement'>
                    <div className='logementContainer'>
                        <div>
                            <h1>{logement.title}</h1>
                            <h2>{logement.location}</h2>
                            
                            <div className='tags-list'>
                                {logement.tags.map((tag, index) => <Tag key={index} name={tag}/>)}
                            </div>
                        </div>

                        <div className='host-rating'>
                            <Host fullname={logement.host.name} picture={logement.host.picture}/>
                            <Rating rating={logement.rating}/>
                        </div>
                    </div>

                    <div className='logement-details'>
                        <Dropdown title='Description' text={logement.description}/>
                        <Dropdown title='Équipements' text={logement.equipments}/>
                    </div>
                </section>
            </main>

            <Footer/>
        </>}
        {logement === undefined && <ErrorPage404/>}
    </>
}

export default Logement
