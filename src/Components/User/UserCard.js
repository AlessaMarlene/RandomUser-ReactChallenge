import Card from "../Utils/Card";
import Container from "../Utils/Container";
import UserImage from "../Utils/UserImage";

const UserCard = ({ userInfo }) => {
    return (
        <Card>
            <Container direction="row" align="center" heightSize="25%">
                <UserImage
                    src={userInfo.picture.thumbnail}
                    alt="UserImage"
                    widthSize="60px"
                    heightSize="60px"
                    marginSize="1rem"
                    radius="50%"
                ></UserImage>
                <h3>
                    {userInfo.name.first} <br /> {userInfo.name.last}
                </h3>
            </Container>
            <h4>{userInfo.location.city}</h4>
            <h4>{userInfo.location.country}</h4>
        </Card>
    );
};

export default UserCard;
