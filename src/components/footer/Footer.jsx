import "./footer.scss";

import { AiFillYoutube, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>VetPet</h2>
        <p>There is nothing true in this world than the love of a good pet.</p>
        <br />
        <p>We give attention to genuine feedback.</p>
        <strong>All right received @vetpet</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://github.com/deepanksha">
          <AiFillGithub />{" "}
        </a>
        <a href="https://www.linkedin.com/in/deepanksha-pal-28610791/">
          <AiFillLinkedin />{" "}
        </a>
        <a href="https://www.youtube.com/@travelvlogs4229">
          <AiFillYoutube />{" "}
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
