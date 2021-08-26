import "./UserCard.css";

const UserCard = ({ userInfo }) => {
    return (
        <div className="card">
            <div className="cardHeader">
                <img src={userInfo.picture.thumbnail} alt="UserImage"></img>
                <h3>
                    {userInfo.name.first} {userInfo.name.last}
                </h3>
            </div>
            <h4>{userInfo.location.city}</h4>
            <h4>{userInfo.location.country}</h4>
        </div>
    );
};

export default UserCard;
