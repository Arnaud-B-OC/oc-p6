import './App.scss';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import ErrorPage404 from './pages/ErrorPage404';
import Logement from './pages/Logement';

function App() {
    return (
        <>
            <Routes>
                <Route path='*' element={<ErrorPage404/>} />
                <Route path="/" element={<Home/>}/>
                <Route path="/about/" element={<About/>}/>
                <Route path="/logements/:id" element={<Logement/>}/>
            </Routes>
        </>
    );
}

export default App;
