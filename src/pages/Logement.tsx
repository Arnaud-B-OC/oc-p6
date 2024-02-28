import Dropdown from "../components/Dropdown"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Tag from "../components/Tag"

function Logement() {
    
    const data = {
		"id": "c67ab8a7",
		"title": "Appartement cosy",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
		"pictures": [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
		],
		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
		"host": {
			"name": "Nathalie Jean",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
		},
		"rating": "5",
		"location": "Ile de France - Paris 17e",
		"equipments": [
			"Équipements de base",
			"Micro-Ondes",
			"Douche italienne",
			"Frigo",
			"WIFI"
		],
		"tags": [
			"Batignolle",
			"Montmartre"
		]
	}

    return <>
        <Header/>

        <main>
            {/* TODO : Carrousel Component */}
            <div>
                {data.pictures.map((picture) => {
                    return <img src={picture} style={{display: 'none'}} key={picture} alt=''/>
                })}
            </div>

            <section className='logement'>
                <h1>{data.title}</h1>
                <h2>{data.location}</h2>

                <div>
                    <div className='tags-list'>
                        {data.tags.map((tag) => {
                            return <Tag key={tag} name={tag}/>
                        })}
                    </div>
                    <div>
                        {/* TODO : Host */}
                        <p>{data.host.name}</p><img src={data.host.picture} alt={data.host.name}/>
                        
                        {/* TODO : Rating */}
                        <p>{data.rating} étoiles</p>
                    </div>
                </div>

                <div className='logement-details'>
                    <Dropdown title='Description' text={data.description}/>
                    <Dropdown title='Équipements' text={data.equipments}/>
                </div>
            </section>
        </main>

        <Footer/>
    </>
}

export default Logement
