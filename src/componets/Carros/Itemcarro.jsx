import React from 'react'

function ItemCarro({ objeto, handleDeletarItem }) {
    return (
        <tr>
            <td>{objeto.carro}</td>
            <td>{objeto.ano}</td>
            <td>{objeto.valor}</td>
            <td>
                <input type="button" onClick={() => handleDeletarItem(objeto.id)} value="Deletar" />
            </td>
        </tr>
    )
}

export default ItemCarro