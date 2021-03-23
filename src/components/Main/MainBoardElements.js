import styled from "styled-components";

export const MainContainer = styled.div`
    justify-content: center;
    height: 100%;
    /* position: relative; */
    height: 800px;
    overflow: hidden;

    background: whitesmoke;
`;

export const HeroSection = styled.div`
    background: black;
    height: 400px;
    width: 200px;
    justify-content: center;
    /* position: fixed; */
    z-index: 9;
`;
export const SocketButton = styled.button`
    display: flex;
    background-color: black;
    color: white;
    margin-left: 50px;
    align-items: center;
`;