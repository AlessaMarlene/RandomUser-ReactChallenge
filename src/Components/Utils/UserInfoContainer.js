import styled from "styled-components";

const UserInfoContainer = styled.div`
    flex: ${(props) => props.flexValue};
    text-align: ${(props) => props.align};
    align-self: ${(props) => props.self};
    border-left: ${(props) => props.bordLeft};
    border-bottom: ${(props) => props.bordBottom};

    @media (max-width: 500px) {
        ${({ bordResponsive }) =>
            bordResponsive && `border-top: 1px solid rgb(218, 213, 213)`}
    }
`;

export default UserInfoContainer;
