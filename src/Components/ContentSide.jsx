import ContentSideAbout from "./ContentSideAbout";
import imgAvatar from "../assets/avatar_img.jpg";

const ContentSide = () => {
  return (
    <div className="contentside">
      <ContentSideAbout
        title="ABOUT ME"
        description="Cras interdum pharetra felis eu faucibus."
        picture={imgAvatar}
      />
    </div>
  );
};

export default ContentSide;
