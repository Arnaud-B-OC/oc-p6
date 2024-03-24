import { useState } from 'react';
import './carrousel.scss';

function Carrousel({images} : {images: string[] | undefined}) {
    const [slide, setSlide] = useState<number>(0);
    const imgs = images ?? [];
    const showImageNav = imgs.length !== 1;

    const prevSlide = () => setSlide(slide > 0 ? (slide - 1) : (imgs.length - 1));
    const nextSlide = () => setSlide(slide < (imgs.length - 1) ? (slide + 1) : 0);
    
    return <div className='carrousel'>
        {imgs.map((image, index) => <img key={index} src={image} className={slide === index ? 'slide' : 'hidden'} alt=''/>)}

        {showImageNav && <>
            <img src='/assets/icons/arr-right.svg' className='arrow-left arrow reverse' alt='' onClick={prevSlide}/>
            <img src='/assets/icons/arr-right.svg' className='arrow-right arrow' alt='' onClick={nextSlide}/>
            <p className='indicator'>{slide+1}/{imgs.length}</p>
        </>}
    </div>
}

export default Carrousel;
