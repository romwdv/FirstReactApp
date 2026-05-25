import ContentSideAbout from "./ContentSideAbout";
import avatar from "../assets/avatar.jpg";

const ContentSide = () => {
  return (
    <div className="contentside">
      <ContentSideAbout
        title="About Me"
        description="Cras interdum pharetra felis eu faucibus."
        picture={avatar}
      />
    </div>
  );
};

export default ContentSide;
