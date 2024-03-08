import './rating.scss'

function Rating({rating} : {rating : number}) {
    return <div className='rating'>
        <img className={rating >= 1 ? 'star-active' : 'star-inactive'} src='/assets/icons/star.svg' alt=''/>
        <img className={rating >= 2 ? 'star-active' : 'star-inactive'} src='/assets/icons/star.svg' alt=''/>
        <img className={rating >= 3 ? 'star-active' : 'star-inactive'} src='/assets/icons/star.svg' alt=''/>
        <img className={rating >= 4 ? 'star-active' : 'star-inactive'} src='/assets/icons/star.svg' alt=''/>
        <img className={rating >= 5 ? 'star-active' : 'star-inactive'} src='/assets/icons/star.svg' alt=''/>
    </div>
}

export default Rating
