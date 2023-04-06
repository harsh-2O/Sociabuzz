import "./closeFriend.css";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
      <img
        src={user.profilePicture}
        alt="FriendImg"
        className="sidebarFriendImage"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
