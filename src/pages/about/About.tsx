import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Dropdown from '../../components/dropdown/Dropdown';
import './about.scss';
import { useEffect, useState } from 'react';
import { AboutData } from '../../interfaces';
import Banner from '../../components/banner/Banner';
import Loading from '../loading/Loading';
import { request } from '../../request';

function About() {
    const [aboutData, setAboutData] = useState<AboutData[] | undefined>(undefined);

    useEffect(() => {
        request('/api/about.json').then((result : AboutData[]) => setAboutData(result))
	}, []);

    return <>
        <Header/>

        {aboutData && <main>
            <Banner image='/assets/images/img2.png'/>

            <section className='about'>
                {aboutData.map((aboutItem, index) => <Dropdown key={index} title={aboutItem.title} text={aboutItem.text}/>)}
            </section>
        </main>}
        {!aboutData && <Loading/>}

        <Footer/>
    </>
}

export default About;
