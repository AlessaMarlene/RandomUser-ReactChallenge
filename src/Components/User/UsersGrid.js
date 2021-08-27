import React from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import { RandomUsersContext } from "../../Context/Context";
import HomeContainer from "../Utils/HomeContainer";
import Container from "../Utils/Container";

const UsersGrid = () => {
    const { users, showMoreUsers } = React.useContext(RandomUsersContext);
    const bottomPage = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (intersections) => {
                if (intersections[0].isIntersecting) showMoreUsers();
            },
            { threshold: 1 }
        );

        observer.observe(bottomPage.current);
    }, [showMoreUsers]);

    return (
        <HomeContainer>
            <h1>Users Grid</h1>
            <Container wrap="wrap">
                {users.map((user, index) => (
                    <Link key={index} to={`/users/${user.email}`}>
                        <UserCard userInfo={user} />
                    </Link>
                ))}
            </Container>
            <div ref={bottomPage}></div>
        </HomeContainer>
    );
};

export default UsersGrid;
