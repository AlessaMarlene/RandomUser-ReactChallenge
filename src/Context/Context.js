import React from "react";
import Container from "../Components/Utils/Container";

const RandomUsersContext = React.createContext();

const fetchUsers = fetch("https://randomuser.me/api?results=50")
    .then((resp) => resp.json())
    .then((resp) => resp.results);

const STATUS = {
    initial: "initial",
    resolved: "resolved",
    rejected: "rejected",
};

const UsersProvider = ({ children }) => {
    const [users, setUsers] = React.useState([]);
    const [state, setStatus] = React.useState(STATUS.initial);

    function showMoreUsers() {
        fetchUsers.then((moreUsers) => {
            setUsers((grid) => grid.concat(moreUsers));
        });
    }

    React.useEffect(() => {
        fetchUsers
            .then((firstUsers) => {
                setUsers(firstUsers);
                setStatus(STATUS.resolved);
            })
            .catch(() => {
                setStatus(STATUS.rejected);
            });
    }, []);

    if (state === STATUS.initial) {
        return (
            <Container>
                <h2>Loading...</h2>
            </Container>
        );
    }

    if (state === STATUS.rejected)
        return (
            <Container>
                <h2>We can't seem to find any results now. Try again later.</h2>
            </Container>
        );

    return (
        <RandomUsersContext.Provider value={{ users, showMoreUsers }}>
            {children}
        </RandomUsersContext.Provider>
    );
};

export { RandomUsersContext, UsersProvider };
