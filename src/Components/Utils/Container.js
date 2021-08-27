import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    transition: all 0.3s;
    flex-wrap: ${(props) => props.wrap};
    flex-direction: ${(props) => props.direction};
    align-items: ${(props) => props.align};
    width: ${(props) => props.widthSize};
    height: ${(props) => props.heightSize};
    margin: ${(props) => props.margin};
    border: ${(props) => props.border};
    border-bottom: ${(props) => props.bordBottom};
    border-radius: ${(props) => props.radius};
    background-color: ${(props) => props.color};

    &:hover {
        ${({ boxShadow }) =>
            boxShadow && `box-shadow: 5px 10px 8px 10px rgba(0, 0, 0, 0.21);`}
    }

    @media (max-width: 1300px) {
        ${({ widthResponsive }) => widthResponsive && `width: 60%`}
    }

    @media (max-width: 700px) {
        ${({ widthResponsive }) => widthResponsive && `width: 100%`}
    }

    @media (max-width: 500px) {
        ${({ columnResponsive }) =>
            columnResponsive &&
            `display: flex;
            flex-direction: column;
        `}
    }
`;

export default Container;
