import React, { useState, useEffect } from 'react'
import CarroFormulario from './CarroFormulario';
import CarrosLista from './CarrosLista';

import Axios from 'axios';

const servico = Axios.create({
    baseURL: 'http://localhost:8080'
});


const servicoCEP = Axios.create({
    baseURL: 'https://viacep.com.br/ws'
});


export default function index() {


    const [listacarros, setlistacarros] = useState([]);


    useEffect(() => {

        listarCarros()
    }, [])

    function listarCarros() {
        // consumindo API

        // forma nativa do javascript
        // fetch("http://localhost:8080/carros").then(response => {
        //     if (response.ok) return response.json();
        // }).then(data => setlistacarros(data))

        // utilizando AXIOS
        servico.get("/carros").then(({ data }) => {
            setlistacarros(data)
        })
    }

    function handleAdicionarCarroALista(carro, ano, valor) {


        servicoCEP.get("/58083240/json").then(({ data }) => {
            servico.post("/carros", {
                carro: carro,
                ano: ano,
                valor: valor,
                ...data
            }).then(({ data: carro }) => {
                setlistacarros([...listacarros, carro])
            })
        })

    }

    function handleDeletarItem(idCarro) {
        servico.delete("/carros/" + idCarro).then(request => listarCarros())
    };

    return (
        <div>
            <CarroFormulario addCarro={handleAdicionarCarroALista} titulo="Cadastro de veículo" />
            <CarrosLista lista={listacarros} handleDeletarItem={handleDeletarItem} />
        </div>



    )
}
