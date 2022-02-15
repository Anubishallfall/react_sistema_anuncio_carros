import React, { useEffect, useRef, StyleSheet } from 'react'

function CarroFormulario({ addCarro, titulo = "Tela de cadastro" }) {

    const carrosRef = useRef();
    const anoRef = useRef();
    const valorRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        if (carrosRef.current.value == "") return
        if (anoRef.current.value == "") return
        if (valorRef.current.value == "") return



        addCarro(carrosRef.current.value, anoRef.current.value, valorRef.current.value);

        carrosRef.current.value = ""
        anoRef.current.value = ""
        valorRef.current.value = ""
    }



    return (
        <div>
            <h2>{titulo}</h2>
            <form onSubmit={handleSubmit}>
                <label>Nome</label>
                <input type="text" ref={carrosRef} />
                <label>Ano</label>
                <input type="text" ref={anoRef} />
                <label>Valor</label>
                <input type="text" ref={valorRef} />
                <input type="submit" value="Adicionar" />
            </form>
        </div>
    )


}

export default CarroFormulario;