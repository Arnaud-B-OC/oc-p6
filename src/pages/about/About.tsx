import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Dropdown from '../../components/dropdown/Dropdown';
import './about.scss';
import { useEffect, useState } from 'react';
import { AboutData } from '../../interfaces';
import Banner from '../../components/banner/Banner';

function About() {
    const [aboutData, setAboutData] = useState<AboutData[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/about.json').then((data) => data.json()).then((json) => {
            setAboutData(json)
        });
	}, []);

    return <>
        <Header/>

        <main>
            <Banner image='/assets/images/img2.png'/>

            <section className='about'>
                {aboutData.map((aboutItem, index) => <Dropdown key={index} title={aboutItem.title} text={aboutItem.text}/>)}
            </section>
        </main>

        <Footer/>
    </>
}

export default About;
