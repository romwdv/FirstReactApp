import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="links-left">
          <ul>
            <NavbarLink linkurl="#" linktext="Lien 1" />
            <NavbarLink linkurl="#" linktext="Lien 2" />
            <NavbarLink linkurl="#" linktext="Lien 3" />
          </ul>
        </div>
        <div className="links-right">
          <ul>
            <NavbarLink linkurl="#" linktext="Lien 3" />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
