import './dropdown.scss';

function Dropdown({title, text} : {title : string, text : string[] | string} = {title: '', text: []}) {
    let data = Array.isArray(text) ? text : [text]
    
    return <div className='dropdown'>
        <div className='bar'>
            <p>{title}</p>
            <img src='/assets/icons/arrow.svg' alt=''/>
        </div>
        <div className='content'>
            {data.map((t) => { return <p key={t}>{t}</p> })}
        </div>
    </div>
}

export default Dropdown
