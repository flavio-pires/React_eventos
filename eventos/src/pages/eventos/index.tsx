import React, {useState, useEffect} from 'react';
import Header from '../../components/header';
import '../../Assets/style/global.css';
import Footer from '../../components/footer';

function Eventos(){
    const [filme, setFilme] = useState('');
    const [filmes, setFilmes] = useState([]);
    const [idfilme, setIdFilme] = useState(0);

    const [genero, setGenero] = useState('');
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        listarFilmes();
        listarGeneros();
    },[])

    return(
        <div>
            <Header title="Registre seus Eventos"/>
            <h1>Eventos</h1>
            <Footer/>
        </div>
    );
}

export default Eventos;