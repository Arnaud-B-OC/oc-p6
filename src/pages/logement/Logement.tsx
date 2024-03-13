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

function Logement() {
    const params = useParams();

    const [logement, setLogement] = useState<LogementData>();

    useEffect(() => {
        fetch('http://localhost:3000/api/logements.json').then((data) => data.json()).then((json) => {
            let logement : LogementData | undefined = json.find((logement : LogementData) => logement.id === params.id);
            setLogement(logement);
        });
	}, [params.id]);

    return <>
        {logement && <>
            <Header/>

            <main>
                <Carrousel images={logement?.pictures}/>
                
                <section className='logement'>
                    <div className='upperlogementcontainer'>
                        <div className='hostratingtitle'>
                            <h1>{logement?.title}</h1>
                            <h2>{logement?.location}</h2>
                            
                            <div className='tags-list'>
                                {logement?.tags.map((tag) => <Tag key={tag} name={tag}/>)}
                            </div>
                        </div>

                        <div className='host-rating'>
                            <Host fullname={logement?.host.name ?? ''} picture={logement?.host.picture ?? ''}/>
                            <Rating rating={logement?.rating ?? 0}/>
                        </div>
                    </div>

                    <div className='logement-details'>
                        <Dropdown title='Description' text={logement?.description ?? ''}/>
                        <Dropdown title='Équipements' text={logement?.equipments ?? ''}/>
                    </div>
                </section>
            </main>

            <Footer/>
        </>}
        {!logement && <ErrorPage404/>}
    </>
}

export default Logement
