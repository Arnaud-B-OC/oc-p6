import './host.scss'

function Host({fullname, picture} : {fullname: string, picture: string}) {
    let [name, surname] = fullname.split(' ');

    return <div className='host'>
        <p>{name}<br/>{surname}</p>
        <img src={picture} alt={name}/>
    </div>;
}

export default Host
