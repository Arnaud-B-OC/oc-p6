import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './errorPage.scss'

function ErrorPage404() {
    return <>
        <Header/>

        <main className='errPage'>
            <p className='err404'>404</p>
            <h1 className='err'>Oups! La page que vous demandez n'existe pas.</h1>

            <Link to='/' className='err'>Retourner sur la page d’accueil</Link>
        </main>

        <Footer/>
    </>
}

export default ErrorPage404
