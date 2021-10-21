import React from 'react'
import { useHistory } from "react-router";


export default function Jogo({jogo}) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/admin/editar-jogo/${jogo.id}`);
    };
    return (
        <div>
            <div className="jogos"  onClick={handleClick}>
                    <div className="jogo">
                        <img src={jogo.capa}></img>
                        <p>{jogo.nome}</p> 
                    </div>
                </div>
        </div>
    )
}