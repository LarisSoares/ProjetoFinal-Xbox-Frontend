import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Api } from '../../api/Api';
import '../Categoria/Categoria.css;'

export default function JogosGenero({categoria}) {
    const [categoria, setCategorias] = useState([]);
    useEffect(() => {
        const loadCategoriaList = async () => {
            const response = await Api.buildApiGetRequest(Api.readAllGeneroUrl());
            const results = await response.json();
            setCategorias(results);
        };

        loadCategoriaList();
    }, []);

    const history = useHistory();

    const handleClick = () => {
        history.push(`/genero/${categoria.id}/GeneroJogos`);
    };

    
    return (
        <>
        <div onClick={handleClick} className="categoria-item">
                <h2>{categoria.nome}</h2>
        </div>
        </>
    )
}