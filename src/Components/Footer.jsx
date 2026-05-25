const Footer = (props) => {
  return (
    <footer>
      <h4>
        Made with <span>{props.whith}</span> at <span>{props.at}</span> by{" "}
        <span>{props.by}</span>
      </h4>
    </footer>
  );
};

export default Footer;
