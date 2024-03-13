import './rating.scss';

function Rating({rating} : {rating : number}) {
    return <div className='rating'>
        <img src={rating >= 1 ? '/assets/icons/star-active.svg' : '/assets/icons/star-inactive.svg'} alt=''/>
        <img src={rating >= 2 ? '/assets/icons/star-active.svg' : '/assets/icons/star-inactive.svg'} alt=''/>
        <img src={rating >= 3 ? '/assets/icons/star-active.svg' : '/assets/icons/star-inactive.svg'} alt=''/>
        <img src={rating >= 4 ? '/assets/icons/star-active.svg' : '/assets/icons/star-inactive.svg'} alt=''/>
        <img src={rating >= 5 ? '/assets/icons/star-active.svg' : '/assets/icons/star-inactive.svg'} alt=''/>
    </div>
}

export default Rating
