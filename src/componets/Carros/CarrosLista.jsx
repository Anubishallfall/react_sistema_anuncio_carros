import React from 'react'
import ItemCarro from './Itemcarro'

function CarrosLista({ lista, handleDeletarItem }) {
    return (
        <div className='listacarros' >

            {lista.length > 0 &&
                <table>
                    <thead>
                        <tr>
                            <th>CARRO</th>
                            <th>ANO</th>
                            <th>VALOR</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            lista.map((objeto) =>
                                <ItemCarro objeto={objeto} key={objeto.id} handleDeletarItem={handleDeletarItem} />
                            )
                        }
                    </tbody>
                </table>
            }

        </div>
    )
}

export default CarrosLista