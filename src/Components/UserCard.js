const UserCard = ({userInfo}) => {
    return ( 
        <div>
            <img src={userInfo.picture.thumbnail} alt='#'></img>
            <p>{userInfo.name.first}</p>
            <p>{userInfo.location.city}</p>
            <p>{userInfo.location.country}</p>
        </div>
    );
}
 
export default UserCard;