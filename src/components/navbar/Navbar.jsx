import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" className="logo-img" alt="Dog" />
        <span>VetPet</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>5</span>
        </div>
        <div className="user">
          <img
            src="https://avatars.githubusercontent.com/u/108534677?v=4"
            alt="Deep"
          />
          <span>Deep</span>
        </div>
        <img src="/setting.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
