import styled from "styled-components";

const handleColorCard = () => {
    // console.log(color);
    // switch (color) {
    //     case "primary":
    //         return "#07070D";
    //     case "secondary":
    //         return "#ff9e00";
    //     case "third":
    //         return "#14213d";
    // }
    return "#14213d";
};
export const ScalesBackground = styled.div`
    background: rgb(9, 131, 193);
    background: linear-gradient(
        90deg,
        rgba(9, 131, 193, 1) 0%,
        rgba(74, 237, 160, 1) 52%,
        rgba(9, 131, 193, 1) 100%
    );
`;
export const ScalesContainer = styled.div`
    /* background-color: #14213d; */
    /* position: relative; */
    /* 
    height: 100%;
    width: 100%; */
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
/* 
    @media screen and (max-width: 1200px) {
        height: 1400px;
    }
    @media screen and (max-width: 760px) {
        height: 2300px;
    } */

export const ScalesWrapper = styled.div`
    z-index: 10;
    max-width: 1050px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 7px;
    padding: 0 10px;

    /* @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    } */

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ScaleCard = styled.div`
    background: ${({ colorCard }) => handleColorCard(colorCard)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    color: ${({ colorCard }) =>
        colorCard == "primary" ? "white" : "rgb(72,72,72)"};
    max-height: 340px;
    padding: 50px;
    margin: 10px;
    box-shadow: 0 0 2px 1px white;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        box-shadow: 0 0 4px 2px ${({ colorCard }) => handleColorCard(colorCard)};
    }
    /* @media screen and (min-width: 880px) {
        height: 330px;
    } */
`;
export const ScaleOrderTitle = styled.h1`
    font-size: 30px;
    color: ${({ colorCard }) => (colorCard == "primary" ? "#ccff33" : "navy")};
    font-weight: bold;
    text-align: center;
`;
export const ScaleMainTitle = styled.h2`
    font-size: 24px;
    color: ${({ colorCard }) => (colorCard == "primary" ? "#ccff33" : "khaki")};
    font-weight: bold;
    text-align: center;
`;
export const ScaleLabelTitle = styled.h2`
    font-size: 12px;
    color: white;
    /* color: ${({ colorCard }) =>
        colorCard == "primary" ? "#ccff33" : "khaki"}; */
    font-weight: bold;
    /* text-align: center; */
`;
export const ScaleLabelField = styled.input`
    background-color: white;
    color: black;
    font-size: 20px;
    cursor: pointer;
    outline: none;
`;
export const ScaleAccuracyContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
export const ScaleAccuracyElement = styled.div`
    border-radius: 20px;
    margin: 5px 40px;
    height: 25px;
    width: 25px;
    background-color: ${({ color }) => color};
`;
export const ScaleAccuracyLabel = styled.h3`
    text-align: center;
    font-size: 10px;
    margin: 0 20px;
    color: whitesmoke;
`;

export const ScalesFinishButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ScalesFinishButton = styled.button`
    border-radius: 12px;
    size: 20px;
    background-color: red;
    color: whitesmoke;
    border: 1px solid whitesmoke;
    padding: 10px 10px;
    margin: 20px 0;
    &:hover {
        background: whitesmoke;
        color: green;
        border: 2px solid black;
    }
`;
