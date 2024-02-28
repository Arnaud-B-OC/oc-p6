
function Dropdown({title, text} : {title : string, text : string}) {
    return <div className='dropdown'>
        <div className='bar'>
            <p>{title}</p>
            <img src='/assets/icons/arrow.svg' alt=''/>
        </div>
        <div className='content'>
            <p>{text}</p>
        </div>
    </div>
}

export default Dropdown
