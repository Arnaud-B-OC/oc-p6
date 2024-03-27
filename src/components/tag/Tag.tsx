import './tag.scss'

function Tag({name} : {name : string}) {
    return <p className='tag'>{name}</p>
}

export default Tag
