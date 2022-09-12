
import styled from "styled-components";
import { primary, secundary } from "../../styles/colors";

const Header = styled.header`

        color: white;

        padding: 2rem;

        border-radius: 3rem;

        background: ${ secundary};

        box-shadow: 0px 0px 21px 7px rgba(0,0,0,0.65);

`;

const Titulo = styled.h1`

    font-size: 2rem;

`;

const CampoTexto = styled.input`

    width: 70%;
    height: 10%;

    padding: 2rem;

    border: none;
    border-radius: 1rem;

    ::placeholder{
        color: ${primary};
    }

`;

export { Header, Titulo, CampoTexto }