
import { Header, Titulo, CampoTexto, Botao, Divisinha } from "./Style.jsx"
import {IoIosAddCircleOutline} from 'react-icons/io'
import { useEffect, useState } from "react"

export function Crud({ titulo }){

    const [ativo, setAtivo] = useState(true)

    useEffect(() => {
        alert("Clicou no botão")
    }, [ativo])

    return (
        <Header>
            <Titulo>
                { titulo }
            </Titulo>
            <Divisinha>
                <CampoTexto placeholder="Digite o nome..." />
                <Botao onClick={() => setAtivo(true)}>
                    <IoIosAddCircleOutline size={45}/>
                </Botao>
            </Divisinha>
        </Header>
    )
}