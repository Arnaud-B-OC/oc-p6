import './banner.scss';

function Banner({image, title} : {image: string, title?: string}) {
    return <div className='banner'>
        <img src={image} alt=''/>

        {title && <div><h1>{title}</h1></div>}
        {!title && <div className='light'></div>}
    </div>
}

export default Banner;
