const Footer = (props) => {
  return (
    <footer>
      <h4>
        Made with <span>{props.whith}</span> at <span>{props.at}</span> by{" "}
        <span>
          <a href="https://github.com/romwdv/FirstReactApp">{props.by}</a>
        </span>
      </h4>
    </footer>
  );
};

export default Footer;
