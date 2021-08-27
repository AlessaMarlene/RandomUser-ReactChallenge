import React from "react";
import moment from "moment";
import { RandomUsersContext } from "../../Context/Context";
import Container from "../Utils/Container";
import UserInfoContainer from "../Utils/UserInfoContainer";
import UserImage from "../Utils/UserImage";

const UserDescription = ({
    match: {
        params: { email },
    },
    history: { push },
}) => {
    const { users } = React.useContext(RandomUsersContext);
    const selectedUser = users.find((user) => user.email === email);

    if (selectedUser == null) {
        return (
            <Container direction="column" align="center" margin="5em">
                <p>This user doesn't exist. Please try again.</p>
                <button onClick={() => push("/users")}>
                    Back to users list
                </button>
            </Container>
        );
    }

    return (
        <Container direction="column">
            <Container
                direction="column"
                border="1px solid rgb(218, 213, 213)"
                radius="5%"
                margin="2em auto"
                widthSize="40%"
                color="#edf9fd"
                boxShadow
                widthResponsive
            >
                <Container
                    bordBottom="1px solid rgb(218, 213, 213)"
                    direction="column"
                    align="center"
                >
                    <UserImage
                        src={selectedUser.picture.large}
                        alt="UserImage"
                        widthSize="200px"
                        heightSize="200px"
                        marginSize="1rem"
                        radius="50%"
                    ></UserImage>
                    <h1>{selectedUser.login.username}</h1>
                </Container>
                <Container direction="row" columnResponsive>
                    <UserInfoContainer
                        flexValue="1"
                        align="center"
                        self="center"
                    >
                        <p>
                            Name: {selectedUser.name.first}{" "}
                            {selectedUser.name.last}
                        </p>
                        <p>Age: {selectedUser.dob.age}</p>
                        <p>
                            Date of birth:{" "}
                            {moment(selectedUser.dob.date).format(
                                "DD MMM, YYYY"
                            )}
                        </p>
                    </UserInfoContainer>
                    <UserInfoContainer
                        flexValue="1"
                        bordLeft="1px solid rgb(218, 213, 213)"
                    >
                        <UserInfoContainer
                            bordBottom="1px solid rgb(218, 213, 213)"
                            align="center"
                            self="center"
                            bordResponsive
                        >
                            <p>City: {selectedUser.location.city}</p>
                            <p>Country: {selectedUser.location.country}</p>
                        </UserInfoContainer>
                        <UserInfoContainer align="center" self="center">
                            <p>Email: {selectedUser.email}</p>
                            <p>Phone: {selectedUser.phone}</p>
                        </UserInfoContainer>
                    </UserInfoContainer>
                </Container>
            </Container>
            <button onClick={() => push("/users")}>Back to users grid</button>
        </Container>
    );
};

export default UserDescription;
