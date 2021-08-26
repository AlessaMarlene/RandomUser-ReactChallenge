import React from "react";
import { RandomUsersContext } from "../../Context/Context";
import moment from "moment";

const UserDescription = ({
    match: {
        params: { email },
    },
}) => {
    const { users } = React.useContext(RandomUsersContext);
    const selectedUser = users.find((user) => user.email === email);

    if (selectedUser == null) {
        return (
            <>
                <p>This user doesn't exist. Please try again.</p>
                <button type="button">Back to users list</button>
            </>
        );
    }

    return (
        <div>
            <div>
                <img src={selectedUser.picture.large} alt="UserImage"></img>
                <h1>{selectedUser.login.username}</h1>
            </div>
            <div>
                <div>
                    <p>
                        Name: {selectedUser.name.first} {selectedUser.name.last}
                    </p>
                    <p>Age: {selectedUser.dob.age}</p>
                    <p>
                        Date of birth:{" "}
                        {moment(selectedUser.dob.date).format("DD MMM, YYYY")}
                    </p>
                </div>
                <div>
                    <p>City: {selectedUser.location.city}</p>
                    <p>Country: {selectedUser.location.country}</p>
                </div>
                <div>
                    <p>Email: {selectedUser.email}</p>
                    <p>Phone: {selectedUser.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDescription;
