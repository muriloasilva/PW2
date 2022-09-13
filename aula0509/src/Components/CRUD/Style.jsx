
import styled from "styled-components";
import { primary, secundary } from "../../styles/colors";

const Header = styled.header`

        margin-top: 5%;

        width: 100%;

        color: white;

        padding: 2rem;

        background: ${ secundary};

        box-shadow: 0px 0px 21px 7px rgba(0,0,0,0.65);

        display: flex;

        align-items: center;

        justify-content: space-between;


`;

const Titulo = styled.h1`
  
    font-size: 1.5rem;

`;

const Divisinha = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const CampoTexto = styled.input`

    width: 80%;

    padding: 2rem;

    border: none;
    border-radius: 1rem;

    ::placeholder{
        color: ${primary};
    }

`;

const Botao = styled.button`

    display: flex;
    justify-content: center;
    border: none;
    border-radius: 50%;

`;

export { Header, Titulo, CampoTexto, Botao, Divisinha}