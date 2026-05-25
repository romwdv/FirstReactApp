const NavbarLink = (props) => {
  return (
    <li>
      <a href={props.linkurl}>{props.linktext}</a>
    </li>
  );
};

export default NavbarLink;
