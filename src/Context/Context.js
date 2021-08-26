import React from "react";

const RandomUsersContext = React.createContext();

const fetchUsers = fetch("https://randomuser.me/api?results=50")
    .then((resp) => resp.json())
    .then((resp) => resp.results);

const UsersProvider = ({ children }) => {
    const [users, setUsers] = React.useState([]);

    function showMoreUsers() {
        fetchUsers.then((moreUsers) => {
            console.log("Context -  ShowMoreUsers callback");
            return setUsers((grid) => grid.concat(moreUsers));
        });
    }

    React.useEffect(() => {
        console.log("Context -  React.useEffect callback");
        fetchUsers.then((firstUsers) => {
            console.log("firstUsers:", firstUsers);
            setUsers(firstUsers);
        });
    }, []);

    return (
        <RandomUsersContext.Provider value={{ users, showMoreUsers }}>
            {children}
        </RandomUsersContext.Provider>
    );
};

export { RandomUsersContext, UsersProvider };
