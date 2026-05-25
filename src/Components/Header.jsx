import HeaderBaseline from "./HeaderBaseline";
import HeaderTitle from "./HeaderTitle";

const Header = (props) => {
  return (
    <header>
      <HeaderTitle title={props.title} />
      <HeaderBaseline baseline={props.baseline} />
    </header>
  );
};

export default Header;
