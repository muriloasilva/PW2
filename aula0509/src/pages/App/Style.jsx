
import styled from "styled-components";
import { background } from "../../styles/colors.jsx";

const Page = styled.div`

    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

`;


const Container = styled.div`

    height: 70%;
    width: 50%;

    border-radius: 3rem;
    box-shadow: 1px 0px 13px 0px #000000;;

    background: ${background};

`;

export { Container, Page }