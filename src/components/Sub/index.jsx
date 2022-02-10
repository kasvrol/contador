import React, {useState} from 'react'
function Sub(props) {
	function acao(){
		props.onClicar(Math.random(), 'Gerado');
    }

	return(
        <>
            <button onClick={acao}>Alterar</button>
        </>
    )
}

export default Sub