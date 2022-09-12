
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

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 3rem;
    box-shadow: 0px 0px 21px 7px rgba(0,0,0,0.65);;

    background: ${background};

`;

export { Container, Page }