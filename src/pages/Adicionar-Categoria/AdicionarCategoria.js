import React from 'react'
import './AdicionarCategoria.css'
import logo from '../../assets/images/lo.png'
import {Link} from "react-router-dom";
import { Api } from '../../api/Api';

export default function AdicionarCategoria() {
    const handleSubmit =  async event => {
        event.preventDefault();
        const nome = event.target.nome.value;

        const payload = {
            nome,
        };

        const response = await Api.buildApiPostRequest(
            Api.createGeneroUrl(),
            payload
        )
        console.log({response})
    }
    return (
        <div className='registro-container'>
            <div className='registro-card'>
            <img src={logo}></img>
                <h1>ADICIONAR CATEGORIA</h1>
                <p>NOME</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='nome'></input>
                    <div className='login-buttons'>
                        <button type="submit">ADICIONAR</button>
                        <Link to='/admin'><button type="submit">VOLTAR</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
