import React, {useState} from 'react'
function Input() {
	const [nome, setNome] = useState('ex: Pedro')
    

	return(
<>
	<form>
        {/**
         * /* esse input pegará o nome do input e mudará o valor dentro do input que é o nome,
         * no caso. mas se tivesse um nome de exemplo, primeiro seria colocado dentro de aspas e
         * dentro dos parentesesdo useState */
        }
        <input type='text' value={nome} onChange={evento => setNome(evento.target.value)}>
        </input>

	</form>
</>
)
}
export default Input;