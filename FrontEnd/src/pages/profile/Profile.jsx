import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/6.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/8.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Harsh Mehta</h4>
              <span className="profileInfoDesc">Hello Friends Chai Pee Lo</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
