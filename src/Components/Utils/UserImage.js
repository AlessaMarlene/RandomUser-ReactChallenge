import styled from "styled-components";

const UserImage = styled.img`
    border: 1px solid white;
    width: ${(props) => props.widthSize};
    height: ${(props) => props.heightSize};
    margin: ${(props) => props.marginSize};
    border-radius: ${(props) => props.radius};
`;

export default UserImage;
