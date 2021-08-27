import styled from "styled-components";

const Card = styled.div`
    border: 1px solid rgb(218, 213, 213);
    background-color: #edf9fd;
    width: 13rem;
    border-radius: 10%;
    transition: all 0.35s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 16px 15px -4px rgba(0, 0, 0, 0.21);
    }
`;

export default Card;
