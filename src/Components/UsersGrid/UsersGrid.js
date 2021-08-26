import React from "react";
import UserCard from "../UserCard/UserCard";
import { RandomUsersContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import "./UsersGrid.css";

const UsersGrid = () => {
    const { users, showMoreUsers } = React.useContext(RandomUsersContext);
    const bottomPage = React.useRef();

    React.useEffect(() => {
        console.log("User Grid - React.useEffect callback");
        const observer = new IntersectionObserver(
            (intersections) => {
                console.log("User Grid - IntersectionObserver callback");
                if (intersections[0].isIntersecting) showMoreUsers();
            },
            { threshold: 1 }
        );

        observer.observe(bottomPage.current);
    }, [showMoreUsers]);

    return (
        <div className="container">
            <h1>Users Grid</h1>
            <div className="usersContainer">
                {users.map((user, index) => (
                    <Link key={index} to={`/users/${user.email}`}>
                        <UserCard userInfo={user} />
                    </Link>
                ))}
            </div>
            <div ref={bottomPage}></div>
        </div>
    );
};

export default UsersGrid;
