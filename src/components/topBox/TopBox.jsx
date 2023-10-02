import "./topBox.scss";
import { topUser } from "../../data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Customer Detail </h1>
      <div className="list">
        {topUser.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="Costumer" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="phone">{user.phone} </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
